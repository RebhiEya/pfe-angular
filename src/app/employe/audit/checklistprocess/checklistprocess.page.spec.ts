import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistprocessPage } from './checklistprocess.page';

describe('ChecklistprocessPage', () => {
  let component: ChecklistprocessPage;
  let fixture: ComponentFixture<ChecklistprocessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChecklistprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
