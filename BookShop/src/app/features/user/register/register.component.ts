import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FirebaseUsersService } from '../services/firebase-users.service';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { IUserFormData } from 'src/app/core/interfaces/user-form-data.interface';
import { ROLES } from 'src/app/config/user-roles';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('registerForm') form!: NgForm;

  constructor(
    private authService: AuthService, 
    private usersService: FirebaseUsersService,
    private router: Router,
    ) { }

  async registerHandler() {
    const formData: IUserFormData = this.form.value;
    console.log(formData);
    
    
    // try {
    //   const userCredential = await this.authService.signUp(formData.email, formData.password);
    //     // Sign-up successful

    //     if (userCredential.user?.uid) {
    //       const userData: IUser = {
    //         city: formData.city,
    //         deliveryAddres: formData.deliveryAddres,
    //         email: formData.email,
    //         name: formData.name,
    //         phoneNumber: formData.phoneNumber,
    //         postcode: formData.postcode,
    //         surname: formData.surname,
    //         authId: userCredential.user.uid,
    //         wishlist: [],
    //         role: ROLES.BASE_ROLE
    //       }

    //       await this.usersService.addUserWithId(userData, userCredential.user.uid);
    //       this.router.navigate(['/home']);
          
    //     } else {
    //       throw new Error('We didin\'t find id for that user.');
    //     }
    //   } catch(err) {
    //     console.log(err);
    //     console.error(err);
    //   }
      
  }
}
