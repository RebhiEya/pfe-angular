import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistprocessPage } from './checklistprocess.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistprocessPageRoutingModule {}
