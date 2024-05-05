import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnauthorizePageRoutingModule } from './unauthorize-routing.module';

import { UnauthorizePage } from './unauthorize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnauthorizePageRoutingModule
  ],
  declarations: [UnauthorizePage]
})
export class UnauthorizePageModule {}
