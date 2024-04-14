import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessusPage } from './auditprocess.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessusPage 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditprocessPageRoutingModule {}
