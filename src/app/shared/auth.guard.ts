/**
 * Title: auth.guard.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the file defines the auth guard that checks to see if the user is logged in by checking the session_user cookie. If the user is logged in, they can access the application. If not, they are redirected to the sign-in page.
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
