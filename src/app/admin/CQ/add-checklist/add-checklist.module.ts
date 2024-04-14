import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddChecklistPageRoutingModule } from './add-checklist-routing.module';

import { AddChecklistPage } from './add-checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddChecklistPageRoutingModule
  ],
  declarations: [AddChecklistPage]
})
export class AddChecklistPageModule {}
