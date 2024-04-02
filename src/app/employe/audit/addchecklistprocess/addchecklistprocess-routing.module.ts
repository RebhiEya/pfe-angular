import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddchecklistprocessPage } from './addchecklistprocess.page';

const routes: Routes = [
  {
    path: '',
    component: AddchecklistprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddchecklistprocessPageRoutingModule {}
