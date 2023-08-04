import { Component, OnInit } from '@angular/core';
import { UserStateService } from './core/services/user-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookShop';
  isLoading = true;
  constructor(public userState: UserStateService) {}

  ngOnInit(): void {
    this.userState.user$.subscribe({
      next: (user) => {
        if(user != null) {
          this.isLoading = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
