import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3/tab3.page';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab1',
    pathMatch: 'full'
  },

  { path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },

  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },

  {
    path: 'page3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'add-control',
    loadChildren: () => import('./pages/add-control/add-control.module').then( m => m.AddControlPageModule)
  },
  {
    path: 'control-list',
    loadChildren: () => import('./pages/control-list/control-list.module').then( m => m.ControlListPageModule)
  },
  {
    path: 'checklist/:id',
    loadChildren: () => import('./pages/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },

  {
    path: 'defaut/:id',
    loadChildren: () => import('./pages/defaut/defaut.module').then( m => m.DefautPageModule)
  },
  {
    path: 'mycontrol',
    loadChildren: () => import('./pages/mycontrol/mycontrol.module').then( m => m.MycontrolPageModule)
  },
  {
    path: 'decision',
    loadChildren: () => import('./pages/decision/decision.module').then( m => m.DecisionPageModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
