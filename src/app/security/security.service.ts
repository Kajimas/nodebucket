/**
 * Title: security.service.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the security service file for the application. This file is used to find an employee by id.
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
