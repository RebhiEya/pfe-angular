import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddprocessPageRoutingModule } from './addprocess-routing.module';

import { AddprocessPage } from './addprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddprocessPageRoutingModule
  ],
  declarations: [AddprocessPage]
})
export class AddprocessPageModule {}
