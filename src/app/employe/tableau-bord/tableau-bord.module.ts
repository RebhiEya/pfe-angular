import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableauBordPageRoutingModule } from './tableau-bord-routing.module';

import { TableauBordPage } from './tableau-bord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableauBordPageRoutingModule
  ],
  declarations: [TableauBordPage]
})
export class TableauBordPageModule {}
