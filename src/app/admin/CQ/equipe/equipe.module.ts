import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {CustomFilterPipe} from 'src/app/pipes/custom-filter-pipe.pipe';

import { EquipePageRoutingModule } from './equipe-routing.module';
import { EquipePage } from './equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipePageRoutingModule
  ],
  declarations: [EquipePage , CustomFilterPipe]
})
export class EquipePageModule {}
