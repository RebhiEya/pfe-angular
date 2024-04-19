import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistprocesssPageRoutingModule } from './checklistprocesss-routing.module';

import { ChecklistprocesssPage } from './checklistprocesss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistprocesssPageRoutingModule
  ],
  declarations: [ChecklistprocesssPage]
})
export class ChecklistprocesssPageModule {}
