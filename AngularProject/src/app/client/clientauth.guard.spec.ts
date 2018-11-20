import { TestBed, async, inject } from '@angular/core/testing';

import { ClientAuthGuard } from './clientauth.guard';

describe('ClientauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientAuthGuard]
    });
  });

  it('should ...', inject([ClientAuthGuard], (guard: ClientAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
