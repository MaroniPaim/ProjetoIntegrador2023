import { TestBed } from '@angular/core/testing';

import { UserDataServiceTsService } from './user-data.service.ts.service';

describe('UserDataServiceTsService', () => {
  let service: UserDataServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
