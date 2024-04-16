import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAuditPageRoutingModule } from './app-audit-routing.module';

import { AppAuditPage } from './app-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAuditPageRoutingModule
  ],
  declarations: [AppAuditPage]
})
export class AppAuditPageModule {}
