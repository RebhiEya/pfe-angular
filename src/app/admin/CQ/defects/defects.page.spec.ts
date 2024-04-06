import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefectsPage } from './defects.page';

describe('DefectsPage', () => {
  let component: DefectsPage;
  let fixture: ComponentFixture<DefectsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
