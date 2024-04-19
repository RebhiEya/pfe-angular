import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseraddComponent } from './useradd.page';

const routes: Routes = [
  {
    path: '',
    component: UseraddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseraddPageRoutingModule {}
