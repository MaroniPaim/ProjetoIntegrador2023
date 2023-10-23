import { TestBed } from '@angular/core/testing';

import { UserProfileModelTsService } from './user-profile.model.ts.service';

describe('UserProfileModelTsService', () => {
  let service: UserProfileModelTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileModelTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
