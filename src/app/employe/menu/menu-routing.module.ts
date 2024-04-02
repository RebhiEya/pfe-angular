import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { TableauBordPage } from '../tableau-bord/tableau-bord.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage ,
    children:[
      {
        path: 'tableau-bord',
        loadChildren: () => import( '../tableau-bord/tableau-bord-routing.module').then( m => m.TableauBordPageRoutingModule)
      },

      {
        path: 'mycontrol',
        loadChildren: () => import( '../mycontrol/mycontrol-routing.module').then( m => m.MycontrolPageRoutingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
