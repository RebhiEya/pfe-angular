import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlChecklistPage } from './control-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: ControlChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlChecklistPageRoutingModule {}
