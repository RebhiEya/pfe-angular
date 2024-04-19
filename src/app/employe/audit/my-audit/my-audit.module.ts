import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAuditPageRoutingModule } from './my-audit-routing.module';

import { MyAuditPage } from './my-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAuditPageRoutingModule
  ],
  declarations: [MyAuditPage]
})
export class MyAuditPageModule {}
