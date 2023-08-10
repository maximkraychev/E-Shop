import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { UserStateService } from '../services/user-state.service';
import { map} from 'rxjs';
import firebase from 'firebase/compat/app';
import { ErrorPopupService } from '../services/error-popup.service';

export const isUserGuard: CanMatchFn = (route, segments) => {

  const userService = inject(UserStateService);
  const errorService = inject(ErrorPopupService);
  const router = inject(Router);

  return userService.user$.pipe(
    map((userData: firebase.User | null) => {
      if(userData) {
        return true
      } else {
        errorService.pushErrorMsg('Only users have access to this page');
        return router.createUrlTree(['/user/login']);
      }
    })
  )
};
