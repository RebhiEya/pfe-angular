import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAuditPage } from './add-audit.page';

const routes: Routes = [
  {
    path: '',
    component: AddAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAuditPageRoutingModule {}
