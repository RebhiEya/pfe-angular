import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditprocessPageRoutingModule } from './auditprocess-routing.module';

import { ProcessusPage  } from './auditprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuditprocessPageRoutingModule
  ],
  declarations: [ProcessusPage ]
})
export class AuditprocessPageModule {}
