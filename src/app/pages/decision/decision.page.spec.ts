import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecisionPage } from './decision.page';

describe('DecisionPage', () => {
  let component: DecisionPage;
  let fixture: ComponentFixture<DecisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
