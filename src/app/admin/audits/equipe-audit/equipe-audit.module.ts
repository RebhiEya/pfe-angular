import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipeAuditPageRoutingModule } from './equipe-audit-routing.module';

import { EquipeAuditPage } from './equipe-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipeAuditPageRoutingModule
  ],
  declarations: [EquipeAuditPage]
})
export class EquipeAuditPageModule {}
