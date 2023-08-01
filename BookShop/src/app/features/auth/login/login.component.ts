import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('form') form!: NgForm;
  test = this.authService.user$.subscribe({
    next: (user) => {
      if (user) {
        console.log(user.uid);
      } 
    }
  })
  constructor(private authService: AuthService) { }


  loginHandler() {
    const fields = this.form.value
    this.authService.signIn(fields.email, fields.password)
      .then((userCredential) => console.log(userCredential))
      .catch((err) => alert(err));
  }
}
