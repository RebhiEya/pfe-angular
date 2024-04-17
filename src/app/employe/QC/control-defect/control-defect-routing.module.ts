import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlDefectPage } from './control-defect.page';

const routes: Routes = [
  {
    path: '',
    component: ControlDefectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlDefectPageRoutingModule {}
