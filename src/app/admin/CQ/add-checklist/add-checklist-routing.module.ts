import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChecklistPage } from './add-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: AddChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChecklistPageRoutingModule {}
