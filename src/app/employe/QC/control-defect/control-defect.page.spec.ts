import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlDefectPage } from './control-defect.page';

describe('ControlDefectPage', () => {
  let component: ControlDefectPage;
  let fixture: ComponentFixture<ControlDefectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControlDefectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
