import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, ReplaySubject, take } from 'rxjs';
import firebase from 'firebase/compat/app';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
import { ROLES } from 'src/app/config/user-roles';
import { FirebaseCRUTService } from './firebase-crut.service';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  // Its not working with BehaviorSubject because of the initial value;

  // For user status is it guest or user;
  private userAuthSubject$$ = new ReplaySubject<firebase.User | null>(1);
  user$: Observable<firebase.User | null> = this.userAuthSubject$$.asObservable();

  // This is for the whole user data (can be cheked if is admin)
  private userDataSubject$$ = new ReplaySubject<IUser | null>(1);
  userData$: Observable<IUser | null> = this.userDataSubject$$.asObservable();

  // This emit user status;
  constructor(private afAuth: AngularFireAuth, private firebaseService: FirebaseCRUTService<IUser>) {
    this.afAuth.authState.subscribe({
      next: (user) => {
        this.userAuthSubject$$.next(user);
        this.loadUserData(user?.uid);
      },
      error: (err) => {
        alert('Authentication Error: Unable to retrieve user information. Please try again later.');
        console.error(err);
        this.userAuthSubject$$.error(null);
      }
    });
  }

  
  // This will emit user data;
  private loadUserData(userId: string | undefined) {
    if(userId == undefined) {
      this.userDataSubject$$.next(null);
      return;
    }

    this.firebaseService.getById(userId, COLLECTIONS.USERS).pipe(take(1)).subscribe({
      next: (data) => {
        if(data == undefined) {
          this.userDataSubject$$.next(null);
          return
        }

        this.userDataSubject$$.next(data);
      }
    })
  }
}
