/**
 * Title: item.interface.ts
 * Author: Professor Krasso
 * Date: 8/27/2023
 * Modified By: William Egge
 * Description: A typescript file that defines the Category and Item interfaces. the Category interface has two properties: 'categoryName' and 'backgroundColor' and the Item interface has three properties: '_id', 'text', and 'category'.
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
