import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { isUserGuard } from './is-user.guard';

describe('isUserGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
