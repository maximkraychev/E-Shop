import { Component, OnDestroy } from '@angular/core';
import { UserStateService } from './core/services/user-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'BookShop';
  isLoading = true;
  private userSub: Subscription;

  constructor(public userState: UserStateService) {

    this.userSub = this.userState.user$.subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
