/**
 * Title: auth.guard.spec.ts
 * Author: Professor Krasso
 * Date: 8/20/2023
 * Modified By: William Egge
 * Description: the auth guard spec file for the application. This file is used to protect the application from unauthorized users.
 */

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
