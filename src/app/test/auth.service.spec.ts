import { TestBed } from '@angular/core/testing';

import { Auth.ServiceService } from './auth.service.service';

describe('Auth.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.ServiceService = TestBed.get(Auth.ServiceService);
    expect(service).toBeTruthy();
  });
});
