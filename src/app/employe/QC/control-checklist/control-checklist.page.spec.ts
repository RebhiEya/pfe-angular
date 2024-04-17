import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlChecklistPage } from './control-checklist.page';

describe('ControlChecklistPage', () => {
  let component: ControlChecklistPage;
  let fixture: ComponentFixture<ControlChecklistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControlChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
