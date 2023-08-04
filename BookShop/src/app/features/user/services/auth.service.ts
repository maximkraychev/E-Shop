import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // Sign up with email and password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email and password
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  getProfile() {
    return this.afAuth.currentUser;   // it returns a promise;
  }
}
