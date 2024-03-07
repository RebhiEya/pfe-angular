import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefautPage } from './defaut.page';

const routes: Routes = [
  {
    path: '',
    component: DefautPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefautPageRoutingModule {}
