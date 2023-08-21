/**
 * Title: task-management.module.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the task management module file for the application.
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './task-management.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    TaskManagementComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TaskManagementRoutingModule
  ]
})
export class TaskManagementModule { }
