import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistprocessPageRoutingModule } from './checklistprocess-routing.module';

import { ChecklistprocessPage } from './checklistprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistprocessPageRoutingModule
  ],
  declarations: [ChecklistprocessPage]
})
export class ChecklistprocessPageModule {}
