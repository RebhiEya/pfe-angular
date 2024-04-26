import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabbordPageRoutingModule } from './tabbord-routing.module';

import { TabbordPage } from './tabbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabbordPageRoutingModule
  ],
  declarations: [TabbordPage]
})
export class TabbordPageModule {}
