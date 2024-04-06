import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefectsPage } from './defects.page';

const routes: Routes = [
  {
    path: '',
    component: DefectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefectsPageRoutingModule {}
