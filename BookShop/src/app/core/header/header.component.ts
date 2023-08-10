import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserStateService } from '../services/user-state.service';
import firebase from 'firebase/compat/app';
import { ErrorPopupService } from '../services/error-popup.service';
import { ROLES } from 'src/app/config/user-roles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  userState!: firebase.User | null;
  isAdmin: boolean = false;
  private userStateSubscription!: Subscription;
  private userDataSubscription!: Subscription;

  constructor(
    public userStateService: UserStateService, 
    private errorService: ErrorPopupService,
    ) {

      // SUB for user state (is guest or user);
    this.userStateSubscription = this.userStateService.user$.subscribe({
      next: (user) => {
        this.userState = user;
      },
      error: (error) => {
        console.error(error);
        this.errorService.pushErrorMsg(error.message);
        this.userState = null;
      }
    })

    //  SUB for user data (is it admin);
    this.userDataSubscription = this.userStateService.userData$.subscribe({
      next: (userData) => {
        this.isAdmin = userData?.role == ROLES.ADMIN;
      },
      error: (err) => {
        this.isAdmin = false;
        console.error(err);
        errorService.pushErrorMsg(err.message);
      }
    })
  }


  ngOnDestroy(): void {
    this.userStateSubscription.unsubscribe();
    this.userDataSubscription.unsubscribe();
  }
}
