import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipeAuditPageRoutingModule } from './equipe-audit-routing.module';
import {CustomFilterPipe} from 'src/app/pipes/custom-filter-pipe.pipe';

import { EquipeAuditPage } from './equipe-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipeAuditPageRoutingModule
  ],
  declarations: [EquipeAuditPage , CustomFilterPipe]
})
export class EquipeAuditPageModule {}
