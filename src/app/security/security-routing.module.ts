/**
 * Title: security-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the security routing module file for the application.
 */

// imports statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        title: 'NodeBucket: Sign In',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
