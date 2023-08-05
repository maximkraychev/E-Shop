import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserStateService } from '../services/user-state.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  userState!: firebase.User | null;
  private userStateSubscription!: Subscription;

  constructor(public userStateServbice: UserStateService) {
    this.userStateSubscription = this.userStateServbice.user$.subscribe({
      next: (user) => {
        this.userState = user;
      },
      error: (error) => {
        console.error(error);
        this.userState = null;
      }
    })
    
  }

  ngOnDestroy(): void {
    this.userStateSubscription.unsubscribe();
    sessionStorage.removeItem('user-state');
  }
}
