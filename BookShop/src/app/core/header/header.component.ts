import { Component, OnDestroy} from '@angular/core';
import { Subscription, take } from 'rxjs';
import { UserStateService } from '../services/user-state.service';
import firebase from 'firebase/compat/app';
import { ErrorPopupService } from '../services/error-popup.service';
import { FirebaseCRUTService } from '../services/firebase-crut.service';
import { IUser } from '../interfaces/user.interface';
import { COLLECTIONS } from 'src/app/config/firebase-collections';
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

  constructor(
    public userStateServbice: UserStateService, 
    private errorService: ErrorPopupService,
    private firebaseService: FirebaseCRUTService<IUser>
    ) {

    this.userStateSubscription = this.userStateServbice.user$.subscribe({
      next: (user) => {
        this.userState = user;
        if(user) {
          this.checkForAdminRole(user.uid);
        }
      },
      error: (error) => {
        console.error(error);
        this.errorService.pushErrorMsg(error.message);
        this.userState = null;
      }
    })
  }

  checkForAdminRole(userId: string) {
    this.firebaseService.getById(userId, COLLECTIONS.USERS).pipe(take(1)).subscribe({
      next: (data) => {
        this.isAdmin = data?.role == ROLES.ADMIN;
      }
    })
  }

  ngOnDestroy(): void {
    this.userStateSubscription.unsubscribe();
    sessionStorage.removeItem('user-state');
  }
}
