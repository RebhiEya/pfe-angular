import { TestBed } from '@angular/core/testing';

import { MycontrolService } from './mycontrol.service';

describe('MycontrolService', () => {
  let service: MycontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
