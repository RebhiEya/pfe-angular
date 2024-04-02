import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuditprocessPage } from './auditprocess.page';

describe('AuditprocessPage', () => {
  let component: AuditprocessPage;
  let fixture: ComponentFixture<AuditprocessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuditprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
