import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesAuditsPageRoutingModule } from './les-audits-routing.module';

import { LesAuditsPage } from './les-audits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesAuditsPageRoutingModule
  ],
  declarations: [LesAuditsPage]
})
export class LesAuditsPageModule {}
