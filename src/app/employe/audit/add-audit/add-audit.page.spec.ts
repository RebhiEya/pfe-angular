import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAuditPage } from './add-audit.page';

describe('AddAuditPage', () => {
  let component: AddAuditPage;
  let fixture: ComponentFixture<AddAuditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
