/**
 * Title: security.module.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 * Modified By: William Egge
 * Description: This file defines the security module for the application, bringing together various dependencies needed for the security features like the sign-in. Within the NgModule decorator, it declares SecurityComponent and SigninComponent, as well as making various imports.
 */

// imports statements
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SecurityComponent, SigninComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SecurityModule {}
