/**
 * Title: task-management-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the task management routing module file for the application.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './task-management.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TaskManagementComponent,
    children: [
      {
        path: 'my-tasks',
        component: TasksComponent,
        title: 'NodeBucket: My Tasks',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskManagementRoutingModule {}
