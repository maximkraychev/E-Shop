import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private userBehaviorSubject$$ = new BehaviorSubject<firebase.User | null>(null);
  user$: Observable<firebase.User | null> = this.userBehaviorSubject$$.asObservable();

  // private userLoaderBehaviorSubject$$ = new BehaviorSubject<boolean>(true);
  // userLoaderObserver$: Observable<boolean> = this.userLoaderBehaviorSubject$$.asObservable();


  constructor(private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe({
      next: (user) => {
        console.log(user, 'statetetetette');

        // if (user) {
        //   sessionStorage.setItem('user-state', JSON.stringify(user));
        // } else {
        //   sessionStorage.removeItem('user-state');
        // }
       
        this.userBehaviorSubject$$.next(user);
        // this.userLoaderBehaviorSubject$$.next(false);
      },
      error: (err) => this.userBehaviorSubject$$.error(err)
    })
  }
}
