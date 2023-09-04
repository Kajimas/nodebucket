/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: this file defines the routes for the application. it imports necessary modules and components, then sets up and array of routes mapping various URLs to specific components. it also includes route guards for authentication and lazy loading for specific modules.
 */

// imports statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './shared/auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

// routes array with a path, component, and title for each route in the application (e.g. home, about, contact, etc.)
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Nodebucket: Home', // title for the home page
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Nodebucket: Home',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Nodebucket: About Us',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Nodebucket: Contact Us',
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Nodebucket: 404',
      },
      {
        path: 'task-management',
        loadChildren: () =>
          import('./task-management/task-management.module').then(
            (m) => m.TaskManagementModule
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    // path for the security module (e.g. login, register, forgot password, etc.)
    path: 'security',
    loadChildren: () =>
      import('./security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  // imports the RouterModule and defines the routes array and other options (e.g. useHash, enableTracing, scrollPositionRestoration)
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
