import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
//import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  // Using unknown type because returned firebase.User from authState is not the same as our User from firebase/auth;

  private userBehaviorSubject$$ = new BehaviorSubject<unknown | null>(null);
  user$: Observable<unknown | null> = this.userBehaviorSubject$$.asObservable();

  constructor(private afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe({
      next: (user) => this.userBehaviorSubject$$.next(user),
      error: (err) => this.userBehaviorSubject$$.error(err)
    })
  }
}
