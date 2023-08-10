import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, catchError, map, of, switchMap } from 'rxjs';

import { BTN_TITLES } from 'src/app/config/btn-title';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UserStateService } from 'src/app/core/services/user-state.service';
import { FirebaseUsersService } from '../services/firebase-users.service';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { IUserFormProfile } from 'src/app/core/interfaces/user-data-fromProfile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  @ViewChild('profileForm') form!: NgForm;

  btnTitle: string = BTN_TITLES.EDIT_PROFILE;
  editMode: boolean = false;
  btnLoading: boolean = true;
  userData!: IUser | undefined;
  private isUser: boolean = false;
  private userId!: string | undefined;
  private userDataSubscription!: Subscription;

  constructor(
    private userStateService: UserStateService,
    private router: Router,
    private firebaseUserService: FirebaseUsersService,
    private errorService: ErrorPopupService
  ) { }

  ngOnInit(): void {

    //  Authenticating using AngularFireAuth
    const userData$ = this.userStateService.user$
      .pipe(
        map(x => x?.uid),
        switchMap((uid): Observable<IUser | undefined> => {

          if (uid) {
            // If successfully authenticated make a request for user data;
            this.isUser = true;
            this.userId = uid;
            return this.firebaseUserService.getUserDataById(uid);
          } else {
            this.errorService.pushErrorMsg('We couldn\'t find such user.');
            this.router.navigate(['/user/login']);
            return of(undefined);
          }

        }),
        catchError((err: any) => {
          console.error(err);
          this.errorService.pushErrorMsg(err.message);
          this.router.navigate(['/user/login']);
          return of(undefined);
        })
      )

    // Subscribing for user data;     
    this.userDataSubscription = userData$.subscribe({
      next: (data) => {
        if (this.isUser) {
          if (data) {
            this.userData = data;
            // When data come > populate the form; 
            this.populateForm(data);
          } else {
            this.errorService.pushErrorMsg('There is no data for that user.');
          }
        }
        this.btnLoading = false;
      },
      error: (err) => {
        this.btnLoading = false;
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
      }
    })

  }

  populateForm(data: IUser) {
    this.form.form.setValue({
      name: data.name,
      surname: data.surname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      city: data.city,
      deliveryAddres: data.deliveryAddres,
      postcode: data.postcode
    })
  }

  async btnClick() {

    try {
      this.btnLoading = true;

      // Check if there have been made changes;
      let hasAChangeBeenMade = true; // in case we dont have userData execute the update;
      if (this.editMode && this.userData) {
        hasAChangeBeenMade = this.checkForChange(this.userData, this.form.form.value);
      }  

      // If we are in edit mode and we have the user id update the profile info in fireStore;
      if (this.editMode && this.userId && hasAChangeBeenMade) {
        const formData: IUserFormProfile = this.form.form.value;
        const dataToSave: IUserFormProfile = {
          name: formData.name.trim(),
          surname: formData.surname.trim(),
          deliveryAddres: formData.deliveryAddres.trim(),
          email: formData.email.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          postcode: formData.postcode.trim(),
          city: formData.city.trim(),
        } 
        await this.firebaseUserService.updateUserData(this.userId, dataToSave);
      }
      
      this.editMode = !this.editMode;
      this.btnTitle = this.btnTitle == BTN_TITLES.EDIT_PROFILE ? BTN_TITLES.SAVE_PROFILE : BTN_TITLES.EDIT_PROFILE;
      this.btnLoading = false;
    } catch (err) {
      const error: Error = err as Error;
      console.error(err);
      this.errorService.pushErrorMsg(error.message);
      this.btnLoading = false;
    }
  }

  checkForChange(dataFromServerOld: IUser, dataFromFormNew: IUserFormProfile) {
    // TODO find a better solution for this 'any' :(
    for (let key in dataFromFormNew) {
      if ((dataFromFormNew as any)[key] !== (dataFromServerOld as any)[key]) {
        return true;
      }
    }
    return false;
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}