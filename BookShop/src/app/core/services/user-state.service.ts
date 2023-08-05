import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, ReplaySubject} from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  // Its not working with BehaviorSubject because of the initial value;
  private userSubject$$ = new ReplaySubject<firebase.User | null>(1);
  user$: Observable<firebase.User | null> = this.userSubject$$.asObservable();

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe({
      next: (user) => {
        this.userSubject$$.next(user);
      },
      error: (err) => {
        alert('Authentication Error: Unable to retrieve user information. Please try again later.');
        console.error(err);
        this.userSubject$$.error(null);
      }
    });
  }
}
