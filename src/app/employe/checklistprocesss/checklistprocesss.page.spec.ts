import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistprocesssPage } from './checklistprocesss.page';

describe('ChecklistprocesssPage', () => {
  let component: ChecklistprocesssPage;
  let fixture: ComponentFixture<ChecklistprocesssPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChecklistprocesssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
