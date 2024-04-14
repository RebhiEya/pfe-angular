import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddChecklistPage } from './add-checklist.page';

describe('AddChecklistPage', () => {
  let component: AddChecklistPage;
  let fixture: ComponentFixture<AddChecklistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
