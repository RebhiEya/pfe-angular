import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthorizePage } from './unauthorize.page';

const routes: Routes = [
  {
    path: '',
    component: UnauthorizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthorizePageRoutingModule {}
