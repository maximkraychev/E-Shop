import { CanMatchFn, Router } from '@angular/router';
import { UserStateService } from '../services/user-state.service';
import { ErrorPopupService } from '../services/error-popup.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { ROLES } from 'src/app/config/user-roles';

export const isAdminGuard: CanMatchFn = (route, state) => {

  const userService = inject(UserStateService);
  const errorService = inject(ErrorPopupService);
  const router = inject(Router);

  return userService.userData$.pipe(
    map((userData) => {
      if(userData?.role == ROLES.ADMIN) {
        return true;
      } else {
        errorService.pushErrorMsg('Only admin have access to this page.');
        return router.createUrlTree(['/user/login']);
      }
    })
  );
};
