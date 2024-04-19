import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseraddPageRoutingModule } from './useradd-routing.module';

import { UseraddComponent } from './useradd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseraddPageRoutingModule
  ],
  declarations: [UseraddComponent]
})
export class UseraddPageModule {}
