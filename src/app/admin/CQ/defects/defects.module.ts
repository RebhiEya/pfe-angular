import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefectsPageRoutingModule } from './defects-routing.module';

import { DefectsPage } from './defects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefectsPageRoutingModule
  ],
  declarations: [DefectsPage]
})
export class DefectsPageModule {}
