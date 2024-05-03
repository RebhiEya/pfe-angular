import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesAuditsPage } from './les-audits.page';

const routes: Routes = [
  {
    path: '',
    component: LesAuditsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesAuditsPageRoutingModule {}
