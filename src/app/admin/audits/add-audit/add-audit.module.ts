import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAuditPageRoutingModule } from './add-audit-routing.module';

import { AddAuditPage } from './add-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAuditPageRoutingModule
  ],
  declarations: [AddAuditPage]
})
export class AddAuditPageModule {}
