/**
 * Title: task-management.component.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: This file defines the task management component for the application. it uses the Component decorator to specify the metadata and an empty inline styles array. The component's template contains a router outlet element for routing to the child components.
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-task-management',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class TaskManagementComponent {}
