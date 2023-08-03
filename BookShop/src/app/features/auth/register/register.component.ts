import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';
import { Router } from '@angular/router';
import { IUserFormData } from 'src/app/core/interfaces/user-form-data.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('form') form!: NgForm;

  constructor(
    private authService: AuthService, 
    private serviceCRUT: FirebaseCRUTService,
    private router: Router,
    ) { }

  async registerHandler() {
    console.log(this.form);
    const formData: IUserFormData = this.form.value;
    console.log(formData.email, '----', formData.password);
    
    try {
      const userCredential = await this.authService.signUp(formData.email, formData.password);
        // Sign-up successful
        console.log('User signed up:', userCredential.user);

        if (userCredential.user?.uid) {
          const userData: IUser = {
            city: formData.city,
            deliveryAddres: formData.deliveryAddres,
            email: formData.email,
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            postcode: formData.postcode,
            surname: formData.surname,
            authId: userCredential.user.uid,
            wishlist: [],
            role: 'user'
          }

          this.serviceCRUT.addWithCustomId(userData, 'users', userCredential.user?.uid)
          .then(() => {
            console.log('User signed up:', userCredential.user);
            this.router.navigate(['/home']);
          })
          .catch((err) => {throw err});

        } else {
          throw new Error('We didin\'t find uid!');
        }
      } catch(err) {
        console.log(err);
        console.error(err)
      }
      
  }
}






// import { Component, ViewChild, inject } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
// import { IUser } from 'src/app/core/interfaces/user.interface';
// import { FirebaseCRUTService } from 'src/app/core/services/firebase-crut.service';
// import { Router } from '@angular/router';
// import { IUserFormData } from 'src/app/core/interfaces/user-form-data.interface';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

//   @ViewChild('form') form!: NgForm;

//   constructor(private authService: AuthService, private serviceCRUT: FirebaseCRUTService,private router: Router) { }

//   registerHandler() {
//     console.log(this.form);
//     const formData: IUserFormData = this.form.value;
//     console.log(formData.email, '----', formData.password);
    

//     this.authService.signUp(formData.email, formData.password)
//       .then((userCredential) => {

//         // Sign-up successful
//         console.log('User signed up:', userCredential.user);
//         if (userCredential.user?.uid) {
//           const userData: IUser = {
//             city: formData.city,
//             deliveryAddres: formData.deliveryAddres,
//             email: formData.email,
//             name: formData.name,
//             phoneNumber: String(formData.phoneNumber),
//             postcode: formData.postcode,
//             surname: formData.surname,
//             authId: userCredential.user.uid,
//             wishlist: [],
//             role: 'user'
//           }
//           this.serviceCRUT.addWithCustomId(userData, 'users', userCredential.user?.uid)
//           .then(() => {this.router.navigate(['/home'])})
//           .catch((err) => {throw err});
//         } else {
//           throw new Error('We didin\'t find uid!');
//         }

//       })
//       .catch((error) => {
//         // Sign-up failed
//         console.log(error.message);
//         console.error('Error signing up:', error);
        
//       });
//   }
// }
