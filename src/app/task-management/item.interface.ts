/**
 * Title: item.interface.ts
 * Author: Professor Krasso
 * Date: 8/27/2023
 * Modified By: William Egge
 * Description: the item interface file for the application.
 */

export interface Category {
  categoryName: string;
  backgroundColor: string;
}

export interface Item {
  _id?: string; // optional property
  text: string;
  category: Category;
}
