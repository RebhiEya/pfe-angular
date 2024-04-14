import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddchecklistprocessPageRoutingModule } from './addchecklistprocess-routing.module';

import { AddchecklistprocessPage } from './addchecklistprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddchecklistprocessPageRoutingModule
  ],
  declarations: [AddchecklistprocessPage]
})
export class AddchecklistprocessPageModule {}
