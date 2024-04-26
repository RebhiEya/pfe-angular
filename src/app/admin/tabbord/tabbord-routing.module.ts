import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabbordPage } from './tabbord.page';

const routes: Routes = [
  {
    path: '',
    component: TabbordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabbordPageRoutingModule {}
