import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycontrolPageRoutingModule } from './mycontrol-routing.module';

import { MycontrolPage } from './mycontrol.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycontrolPageRoutingModule
  ],
  declarations: [MycontrolPage]
})
export class MycontrolPageModule {}
