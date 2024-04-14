import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatProduitPage } from './updat-produit.page';

describe('UpdatProduitPage', () => {
  let component: UpdatProduitPage;
  let fixture: ComponentFixture<UpdatProduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
