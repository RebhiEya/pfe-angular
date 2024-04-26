import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabbordPage } from './tabbord.page';

describe('TabbordPage', () => {
  let component: TabbordPage;
  let fixture: ComponentFixture<TabbordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabbordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
