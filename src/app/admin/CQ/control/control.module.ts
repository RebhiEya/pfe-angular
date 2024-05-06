import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlPageRoutingModule } from './control-routing.module';
import { DatePipe } from '@angular/common';

import { ControlPage } from './control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlPageRoutingModule
  ],
  providers: [DatePipe],
  declarations: [ControlPage]
})
export class ControlPageModule {}
