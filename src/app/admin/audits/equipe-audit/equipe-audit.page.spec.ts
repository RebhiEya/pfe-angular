import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipeAuditPage } from './equipe-audit.page';

describe('EquipeAuditPage', () => {
  let component: EquipeAuditPage;
  let fixture: ComponentFixture<EquipeAuditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EquipeAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
