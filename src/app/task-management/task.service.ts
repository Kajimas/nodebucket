/**
 * Title: task-management.module.ts
 * Author: Professor Krasso
 * Date: 8/27/2023
 * Modified By: William Egge
 * Description: this service file manages tasks for employees using http methods. it provides the get, post, put, and delete methods for the task management component. All functions interact with the api using employee ids to specify which employee to interact with.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(empId: number) {
    return this.http.get('/api/employees/' + empId + '/tasks');
  }

  addTask(empId: number, task: Item) {
    return this.http.post('/api/employees/' + empId + '/tasks', { task });
  }

  updateTask(empId: number, todo: Item[], done: Item[]) {
    return this.http.put('/api/employees/' + empId + '/tasks', {
      todo,
      done,
    });
  }

  deleteTask(empId: number, taskId: string) {
    return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId);
  }
}
