import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('form') form!: NgForm;

  constructor(private authService: AuthService,private router: Router) { }

  loginHandler() {
    const fields = this.form.value;
    this.authService.signIn(fields.email, fields.password)
      .finally(() => {this.router.navigate(['/home'])})
      .catch((err) => {
        //TODO handle the error;
        alert(err) 
      });
  }
}
