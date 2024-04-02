import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprocessPage } from './addprocess.page';

const routes: Routes = [
  {
    path: '',
    component: AddprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprocessPageRoutingModule {}
