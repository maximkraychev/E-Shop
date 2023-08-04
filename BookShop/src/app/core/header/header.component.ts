import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { UserStateService } from '../services/user-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userState!: boolean;
  private userStateSubscription!: Subscription;

  constructor(private userStateServbice: UserStateService) {}

  ngOnInit(): void {
    this.userStateSubscription = this.userStateServbice.user$.subscribe({
      next: (user) => {
        this.userState = !!user;
      },
      error: (error) => {
        console.error(error);
        this.userState = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.userStateSubscription.unsubscribe();
  }
}
