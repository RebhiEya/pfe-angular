import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddchecklistprocessPage } from './addchecklistprocess.page';

describe('AddchecklistprocessPage', () => {
  let component: AddchecklistprocessPage;
  let fixture: ComponentFixture<AddchecklistprocessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddchecklistprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
