import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EquipePageRoutingModule } from './equipe-routing.module';
import { EquipePage } from './equipe.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipePageRoutingModule,
    SharedModuleModule
  ],
  declarations: [EquipePage ],
  exports:[]
})
export class EquipePageModule {}
