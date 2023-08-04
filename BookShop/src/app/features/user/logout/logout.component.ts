import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.signOut()
    .finally(() => {
      this.router.navigate(['/home'])
    })
    .catch((err) => {
      //TODO handle the error;
      console.error(err);
    })
  }

}
