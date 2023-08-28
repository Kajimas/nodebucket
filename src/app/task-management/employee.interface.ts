/**
 * Title: employee.interface.ts
 * Author: Professor Krasso
 * Date: 8/27/2023
 * Modified By: William Egge
 * Description: the employee interface file for the application.
 */

import { Item } from './item.interface';

export interface Employee {
  empId: number;
  todo: Item[];
  done: Item[];
}
