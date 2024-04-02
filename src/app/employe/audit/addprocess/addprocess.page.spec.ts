import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddprocessPage } from './addprocess.page';

describe('AddprocessPage', () => {
  let component: AddprocessPage;
  let fixture: ComponentFixture<AddprocessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
