/**
 * Title: employee.interface.ts
 * Author: Professor Krasso
 * Date: 8/27/2023
 * Modified By: William Egge
 * Description: A typescript file that defines the Employee interface. The empId property serves as the unique identifier for each employee. The todo and done properties are both arrays for Item objects, as defined in the previously imported Item interface. This interface will be used as a data model for the employee objects in the application.
 */

import { Item } from './item.interface';

export interface Employee {
  empId: number;
  todo: Item[];
  done: Item[];
}
