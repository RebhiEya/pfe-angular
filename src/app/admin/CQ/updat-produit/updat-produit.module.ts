import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatProduitPageRoutingModule } from './updat-produit-routing.module';

import { UpdatProduitPage } from './updat-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatProduitPageRoutingModule
  ],
  declarations: [UpdatProduitPage]
})
export class UpdatProduitPageModule {}
