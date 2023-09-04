/**
 * Title: main.ts
 * Author: Professor Krasso
 * Date: 9/3/23
 * Modified By: William Egge
 * description: This file is the main entry point for the application. it imports the app module from a separate file and uses angular's platformBrowserDynamic function to bootstrap the application. If there is an error, it is logged to the console.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
