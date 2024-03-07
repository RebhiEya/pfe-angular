import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MycontrolPage } from './mycontrol.page';

describe('MycontrolPage', () => {
  let component: MycontrolPage;
  let fixture: ComponentFixture<MycontrolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MycontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
