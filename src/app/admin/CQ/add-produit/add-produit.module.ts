import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProduitPageRoutingModule } from './add-produit-routing.module';

import { AddProduitPage } from './add-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProduitPageRoutingModule
  ],
  declarations: [AddProduitPage]
})
export class AddProduitPageModule {}
