import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFilterPipe } from '../pipes/custom-filter.pipes';



@NgModule({
  declarations: [CustomFilterPipe],
  exports:[CustomFilterPipe],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModuleModule { }
