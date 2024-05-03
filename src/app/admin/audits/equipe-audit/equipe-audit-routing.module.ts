import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipeAuditPage } from './equipe-audit.page';

const routes: Routes = [
  {
    path: '',
    component: EquipeAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipeAuditPageRoutingModule {}
