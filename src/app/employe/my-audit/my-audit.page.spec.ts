import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAuditPage } from './my-audit.page';

describe('MyAuditPage', () => {
  let component: MyAuditPage;
  let fixture: ComponentFixture<MyAuditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
