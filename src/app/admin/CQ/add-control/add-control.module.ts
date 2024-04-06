import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddControlPageRoutingModule } from './add-control-routing.module';

import { AddControlPage } from './add-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddControlPageRoutingModule
  ],
  declarations: [AddControlPage]
})
export class AddControlPageModule {}
