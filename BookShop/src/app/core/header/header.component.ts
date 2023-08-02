import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userState!: boolean;
  private userStateSubscription!: Subscription;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.userStateSubscription = this.afAuth.authState.subscribe({
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
