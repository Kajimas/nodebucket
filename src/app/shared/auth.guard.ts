/**
 * Title: auth.guard.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the auth guard file for the application. This file is used to protect the application from unauthorized users.
 */

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService);

  if (cookie.get('session_user')) {
    console.log('User is logged in and can access the application');
    return true;
  } else {
    console.log('User is not logged in and cannot access the application');
    const router = inject(Router);
    router.navigate(['/security/signin'])
    //, {
    //   queryParams: { returnUrl: state.url },
    // });
    return false;
  }
};
