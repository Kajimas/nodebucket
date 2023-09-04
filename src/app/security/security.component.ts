/**
 * Title: security.component.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 * Modified By: William Egge
 * Description: This file defines the SecurityComponent class that serves as a container for routing within the security module. the component uses a router outlet to dynamically load the sign-in component.
 */

// imports statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  // router outlet for the security module
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class SecurityComponent {

}
