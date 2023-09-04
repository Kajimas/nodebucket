/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 * Modified By: William Egge
 * Description: This file defines the root component for the application. It uses a router-outlet to display the application's routing configuration. It acts as a placeholder that Angular dynamically fills based on the current router state.
 */

// imports statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- This router-outlet displays the content of the BaseLayout or AuthLayout components -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
