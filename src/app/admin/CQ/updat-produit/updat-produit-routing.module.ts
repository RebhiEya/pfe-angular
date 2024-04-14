import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatProduitPage } from './updat-produit.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatProduitPageRoutingModule {}
