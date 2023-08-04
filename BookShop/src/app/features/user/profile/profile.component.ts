import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, concatMap, debounceTime, of, switchMap, take } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UserStateService } from 'src/app/core/services/user-state.service';
import { FirebaseUsersService } from '../services/firebase-users.service';
import firebase from 'firebase/compat/app';

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
    private firebaseUserService: FirebaseUsersService
    ) { }

  ngOnInit(): void {

    const userData$ = this.userStateService.user$
      .pipe(
        debounceTime(400),
        switchMap((user):Observable<IUser | undefined> => {
        
        if (user != null && user.uid) {
          this.userId = user.uid;
          return this.firebaseUserService.getUserDataById(user.uid);
        }else {
          this.router.navigate(['/user/login']);
          return of(undefined);
        }
      }))

      this.userDataSubscription = userData$.subscribe({
        next: (data) => {
          if(data) {
            console.log(data, '-----', 'data');
            
            this.userData = data;
          } else {
            alert('There is no user data for that user!');
            this.router.navigate(['/user/login']);
          }
        }, 
        error: (err) => {
          console.log(err);
          
          alert(err.message);
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




