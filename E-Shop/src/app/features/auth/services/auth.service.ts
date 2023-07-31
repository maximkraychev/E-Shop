// import { Injectable } from '@angular/core';
// //import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   // private afs: AngularFirestore = inject(AngularFirestore);
//   // private afAuth: AngularFireAuth = inject(AngularFireAuth);
//  userData: any;

//   constructor( private afAuth: AngularFireAuth, private route: Router) {
//     this.afAuth.authState.subscribe({
//       next: (user) => {
//         if (user) {
//           this.userData = user;
//           localStorage.setItem('user', JSON.stringify(this.userData));
//         } else {
//           localStorage.setItem('user', 'null');
//         }
//       }
//     })
//   }

//   async signUp(email: string, password: string) {
//     return this.afAuth
//       .createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         // this.setUserData(result);
//         console.log(result);
//         this.route.navigate(['/home'])
//       })
//       .catch((error) => {
//         window.alert(error.message)
//       })
//   }

//   // private setUserData(user: any) {
//   //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
//   //   const userData: any = {
//   //     uid: user.uid,
//   //     email: user.email
//   //   };
//   //   return userRef.set(userData, {
//   //     merge: true
//   //   })
//   // }
// }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserInfo } from 'firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<UserInfo | null>;

  constructor(private afAuth: AngularFireAuth) { 
    // Set up the user$ observable using authState;
    this.user$ = this.afAuth.authState;
  }

  // Sign up with email and password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email and password
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut();
  }
}
