/**
 * Title: security.service.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: this file defines the security service for the application. it imports the HttpClient to make HTTP requests to the API. It also has a findEmployeeById method that takes an employee ID as a parameter and returns the employee data from the API.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  findEmployeeById(empId: number) {
    return this.http.get('/api/employees/' + empId);
  }
}
