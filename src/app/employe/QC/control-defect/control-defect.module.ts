import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlDefectPageRoutingModule } from './control-defect-routing.module';

import { ControlDefectPage } from './control-defect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlDefectPageRoutingModule
  ],
  declarations: [ControlDefectPage]
})
export class ControlDefectPageModule {}
