import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseraddPageRoutingModule } from './useradd-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UseraddComponent } from './useradd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseraddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UseraddComponent]
})
export class UseraddPageModule {}
