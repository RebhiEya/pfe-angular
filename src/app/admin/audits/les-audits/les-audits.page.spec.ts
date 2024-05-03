import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LesAuditsPage } from './les-audits.page';

describe('LesAuditsPage', () => {
  let component: LesAuditsPage;
  let fixture: ComponentFixture<LesAuditsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LesAuditsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
