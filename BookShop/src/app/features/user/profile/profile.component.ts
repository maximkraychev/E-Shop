import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, concatMap, debounceTime, map, of, switchMap, take } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UserStateService } from 'src/app/core/services/user-state.service';
import { FirebaseUsersService } from '../services/firebase-users.service';
import firebase from 'firebase/compat/app';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  @ViewChild('form') form!: NgForm;

  editable: boolean = false;
  private userId!: string;
  userData!: IUser;
  userDataSubscription!: Subscription;

  constructor(
    private userStateService: UserStateService,
    private router: Router,
    private firebaseUserService: FirebaseUsersService,
    private errorService: ErrorPopupService
  ) { }

  ngOnInit(): void {

  // Getting authentication user uid;
  // Then set up observable for user data; 
    const userData$ = this.userStateService.user$
      .pipe(
        map(x => x?.uid),
        switchMap((uid): Observable<IUser | undefined> => {

          if (uid) {
            this.userId = uid;
            return this.firebaseUserService.getUserDataById(uid);
          } else {
            this.errorService.pushErrorMsg('We couldn\'t find such user.');
            this.router.navigate(['/user/login']);
            return of(undefined);
          }

        }))

 // Subscribing for user data;     
    this.userDataSubscription = userData$.subscribe({
      next: (data) => {
        if (data) {
          this.userData = data;
        } else {
          this.errorService.pushErrorMsg('There is no data for that user.');
        }
      },
      error: (err) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
        this.router.navigate(['/user/login']);
      }
    })

  }

  editProfile() {
    this.editable = !this.editable;

  }

  saveProfile() {
    console.log(this.form);
    this.editable = !this.editable;
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}




