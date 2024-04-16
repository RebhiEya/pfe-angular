import { TestBed } from '@angular/core/testing';

import { AuditprocessesService } from './auditprocesses.service';

describe('AuditprocessesService', () => {
  let service: AuditprocessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditprocessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
