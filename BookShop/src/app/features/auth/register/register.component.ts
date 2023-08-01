import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('form') form!: NgForm;
  // private authService: AuthService = inject(AuthService);

  constructor(private authService: AuthService) {}
  registerHandler() {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    
    this.authService.signUp(this.form.value.email, this.form.value.password).then((userCredential) => {
      // Sign-up successful
      console.log('User signed up:', userCredential.user);
    })
    .catch((error) => {
      // Sign-up failed
      console.error('Error signing up:', error);
    });
  }
}
