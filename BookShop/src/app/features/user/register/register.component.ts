import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FirebaseUsersService } from '../services/firebase-users.service';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { IUserFormData } from 'src/app/core/interfaces/user-form-data.interface';
import { ROLES } from 'src/app/config/user-roles';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('registerForm') form!: NgForm;
  btnLoad: boolean = false;

  constructor(
    private authService: AuthService, 
    private usersService: FirebaseUsersService,
    private router: Router,
    private errorService: ErrorPopupService
    ) { }

  async registerHandler() {
    // Change button to loading;
    this.btnLoad = true;

    // Take the values from the Form;
    const formData: IUserFormData = this.form.value;
    
    try {
      const userCredential = await this.authService.signUp(formData.email, formData.passwordGroup.password);   //Sign-up successful
      
        // Copy only the required inputs data from regiser form;
        // That way we are sure there are no additionally added fluids;
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
            role: ROLES.BASE_ROLE
          }

          // Save the user data in firestore;
          await this.usersService.addUserWithId(userData, userCredential.user.uid);
          this.router.navigate(['/home']);
          
        } else {
          throw new Error('We didin\'t find id for that user.');
        }

      } catch(err) {
        this.btnLoad = false;
        const error: Error = err as Error;
        this.errorService.pushErrorMsg(error.message);
        console.error(err);
      }
      
  }
}
