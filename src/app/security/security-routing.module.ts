/**
 * Title: security-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: this file defines the routing for the security module. It imports necessary Angular modules and components, then sets up a route configuration object which specifies that the 'SecurityComponent' should be the main component for the empty path, and its child path 'signin' should load the 'SigninComponent'. finally, it decorates the class with the NgModule decorator and exports the RouterModule.
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
