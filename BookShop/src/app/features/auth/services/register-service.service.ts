// import { Injectable } from '@angular/core';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {} from "@angular/fire/auth/"

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterServiceService {

//   constructor() {}

//   public register() {
//     const auth = getAuth();
//     console.log(auth, '-------------auth');

//     createUserWithEmailAndPassword(auth, 'test@abv.bg', '123456')
//       .then((userCredential) => {
//         console.log(userCredential, '------------- userCredential');
        
//         // Signed in 
//         const user = userCredential.user;
//         console.log(user, '----------user');
        
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, '------', errorMessage);
        
//         // ..
//       });

//       console.log(auth, '-------------auth');
      
//   }
  
// }
