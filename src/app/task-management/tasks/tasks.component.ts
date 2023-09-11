/**
 * Title: tasks.component.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 * Modified By: William Egge
 * description: this component is primarily focused on task management. It uses services to handle tasks for an employee, allowing them to add, delete, and update tasks. It also includes a drag and drop feature that allows the user to move tasks from one list to another.
 */

import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee.interface';
import { Item } from '../item.interface';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  employee: Employee;
  empId: number;
  todo: Item[];
  done: Item[];
  errorMessage: string;
  successMessage: string;

  newTaskForm: FormGroup = this.fb.group({
    text: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    ],
    category: [null],
  });

  constructor(
    private cookieService: CookieService,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.employee = {} as Employee;
    this.todo = [];
    this.done = [];
    this.errorMessage = '';
    this.successMessage = '';

    this.empId = parseInt(this.cookieService.get('session_user'), 10);

    // Not sure if it is getTasks or getTask
    this.taskService.getTasks(this.empId).subscribe({
      next: (emp: any) => {
        console.log('emp', emp);
        this.employee = emp;
      },
      error: (err) => {
        console.log('error', err);
        this.errorMessage = err.message;
        this.hideAlert();
      },
      complete: () => {
        console.log('complete');

        this.todo = this.employee.todo ? this.employee.todo : [];
        this.done = this.employee.done ? this.employee.done : [];

        console.log('todo', this.todo);
        console.log('done', this.done);
      },
    });
  }

  addTask() {
    const text = this.newTaskForm.controls['text'].value;
    const category = this.newTaskForm.controls['category'].value;

    if (!category) {
      this.errorMessage = 'Please provide a category';
      this.hideAlert();
      return;
    }

    let newTask = this.getTask(text, category);

    this.taskService.addTask(this.empId, newTask).subscribe({
      next: (task: any) => {
        console.log('Task added with id', task.id);

        newTask._id = task.id; // set the new task._id to the task.id

        this.todo.push(newTask); // push the new task to the todo array
        this.newTaskForm.reset();

        this.hideAlert();
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.hideAlert();
      },
    });
  }

  deleteTask(taskId: string) {
    console.log(`Task item: ${taskId}`);

    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }

    this.taskService.deleteTask(this.empId, taskId).subscribe({
      next: (res: any) => {
        console.log('Task deleted with id', taskId);

        if (!this.todo) this.todo = [];
        if (!this.done) this.done = [];

        this.todo = this.todo.filter((t) => t._id?.toString() !== taskId);
        this.done = this.done.filter((t) => t._id?.toString() !== taskId);
        this.successMessage = 'Task deleted successfully';
        this.hideAlert();
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.hideAlert();
      },
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log('Moved item in array', event.container.data);

      this.updateTaskList(this.empId, this.todo, this.done);

      // call update api
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log('Moved item in array', event.container.data);

      this.updateTaskList(this.empId, this.todo, this.done);

      // call update api
    }
  }

  updateTaskList(empId: number, todo: Item[], done: Item[]) {
    this.taskService.updateTask(empId, todo, done).subscribe({
      next: (res: any) => {
        console.log('Task updated successfully');
      },
      error: (err) => {
        console.log(`err`, err);
        this.errorMessage = err.message;
        this.hideAlert();
      },
    });
  }

  hideAlert() {
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
    }, 3000);
  }

  getTask(text: string, categoryName: string) {
    let task: Item = {} as Item;

    const white = '#ffffff';
    const green = 'hsl(110, 60%, 40%)';
    const violet = 'violet';
    const orange = 'orange';

    switch (categoryName) {
      case 'testing':
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: green,
          },
        };
        return task;
      case 'meetings':
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: orange,
          },
        };
        return task;
      case 'projects':
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: violet,
          },
        };
        return task;
      default:
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: white,
          },
        };
        return task;
    }
  }
}
