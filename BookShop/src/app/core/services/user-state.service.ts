import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { UserInfo } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  //TODO not used for now, delete later if there is no subs;
  user$: Observable<UserInfo | null>;

  constructor(private afAuth: AngularFireAuth) { 
    // Set up the user$ observable using authState;
    this.user$ = this.afAuth.authState;
  }
}
