import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauBordPage } from './tableau-bord.page';

describe('TableauBordPage', () => {
  let component: TableauBordPage;
  let fixture: ComponentFixture<TableauBordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableauBordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
