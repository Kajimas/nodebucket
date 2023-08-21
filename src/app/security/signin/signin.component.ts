/**
 * Title: signin.component.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the signin component file for the application. This file is used to sign in to the application.
 */


import { SecurityService } from '../security.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export interface SessionUser {
  empId: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  errorMessage: string = '';
  sessionUser: SessionUser = {} as SessionUser;
  isLoading: boolean = false;

  signinForm = this.fb.group({
    empId: [
      null,
      Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private secService: SecurityService,
    private route: ActivatedRoute
  ) {}

  signin() {
    this.isLoading = true;
    const empId = this.signinForm.controls['empId'].value;

    if (!empId || isNaN(parseInt(empId, 10))) {
      this.errorMessage = 'Employee ID is invalid, please try again.';
      this.isLoading = false;
      return;
    }

    this.secService.findEmployeeById(empId).subscribe({
      next: (employee: any) => {
        this.sessionUser = employee;

        this.cookieService.set('session_user', empId, 1);
        this.cookieService.set(
          'session_name',
          `${employee.firstName} ${employee.lastName}`,
          1
        );

        const returnUrl =
          this.route.snapshot.queryParamMap.get('returnUrl') || '/';

        this.isLoading = false;

        this.router.navigate(['/task-management/my-tasks']);
      },
      error: (err: any) => {
        this.isLoading = false;

        if (err.error.message) {
          this.errorMessage = err.error.message;
          return;
        }
        this.errorMessage = err.message;
      },
    });
  }
}
