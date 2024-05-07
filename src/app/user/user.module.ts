import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserComponent } from './user.page';
import { UserPageRoutingModule } from './user-routing.module';
import { CustomFilterPipe } from '../pipes/custom-filter-pipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
 
  ],
  declarations: [UserComponent,CustomFilterPipe]
})
export class UserPageModule {}
