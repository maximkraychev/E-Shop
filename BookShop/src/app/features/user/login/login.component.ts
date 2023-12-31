import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') form!: NgForm;
  btnLoad: boolean = false;

  constructor(private authService: AuthService, private router: Router, private errorService: ErrorPopupService) { }

  loginHandler() {
    this.btnLoad= true;
    const fields = this.form.value;
    this.authService.signIn(fields.email, fields.password)
      .then(() => {this.router.navigate(['/home'])})
      .catch((err) => {
        this.btnLoad = false;
        this.errorService.pushErrorMsg(err.message);
      });
  }
}
