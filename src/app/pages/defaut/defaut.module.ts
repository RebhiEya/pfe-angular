import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefautPageRoutingModule } from './defaut-routing.module';

import { DefautPage } from './defaut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefautPageRoutingModule
  ],
  declarations: [DefautPage]
})
export class DefautPageModule {}
