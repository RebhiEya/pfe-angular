import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAuditPage } from './my-audit.page';

const routes: Routes = [
  {
    path: '',
    component: MyAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAuditPageRoutingModule {}
