import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppAuditPage } from './app-audit.page';

describe('AppAuditPage', () => {
  let component: AppAuditPage;
  let fixture: ComponentFixture<AppAuditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
