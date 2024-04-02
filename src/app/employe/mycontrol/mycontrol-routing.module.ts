import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycontrolPage } from './mycontrol.page';

const routes: Routes = [
  {
    path: '',
    component: MycontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycontrolPageRoutingModule {}
