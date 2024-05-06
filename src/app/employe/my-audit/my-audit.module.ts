import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { MyAuditPageRoutingModule } from './my-audit-routing.module';

import { MyAuditPage } from './my-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAuditPageRoutingModule
  ],
  providers: [DatePipe],
  declarations: [MyAuditPage]
})
export class MyAuditPageModule {}
