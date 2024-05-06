import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycontrolPageRoutingModule } from './mycontrol-routing.module';
import { DatePipe } from '@angular/common';
import { MycontrolPage } from './mycontrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycontrolPageRoutingModule
  ],
  providers: [DatePipe],

  declarations: [MycontrolPage]
})
export class MycontrolPageModule {}
