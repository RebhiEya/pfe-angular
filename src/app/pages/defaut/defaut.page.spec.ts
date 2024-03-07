import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefautPage } from './defaut.page';

describe('DefautPage', () => {
  let component: DefautPage;
  let fixture: ComponentFixture<DefautPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefautPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
