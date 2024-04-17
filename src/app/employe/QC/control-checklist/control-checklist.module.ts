import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlChecklistPageRoutingModule } from './control-checklist-routing.module';

import { ControlChecklistPage } from './control-checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlChecklistPageRoutingModule
  ],
  declarations: [ControlChecklistPage]
})
export class ControlChecklistPageModule {}
