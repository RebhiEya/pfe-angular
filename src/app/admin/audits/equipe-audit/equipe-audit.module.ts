import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipeAuditPageRoutingModule } from './equipe-audit-routing.module';


import { EquipeAuditPage } from './equipe-audit.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipeAuditPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [EquipeAuditPage ],
  exports:[]
})
export class EquipeAuditPageModule {}
