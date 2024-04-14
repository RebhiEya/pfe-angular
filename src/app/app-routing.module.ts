import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentification', // Redirection vers AccueilPage
    pathMatch: 'full'
  },

  {
    path: 'app.component',
    loadChildren: () => import('./app.component').then( m => m.AppComponent)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'tableau-bord',
    loadChildren: () => import('./employe/tableau-bord/tableau-bord.module').then( m => m.TableauBordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./employe/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'mycontrol',
    loadChildren: () => import('./employe/mycontrol/mycontrol.module').then( m => m.MycontrolPageModule)
  },
  {
    path: 'add-audit',
    loadChildren: () => import('./admin/audits/add-audit/add-audit.module').then( m => m.AddAuditPageModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./admin/CQ/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },
  {
    path: 'add-control',
    loadChildren: () => import('./admin/CQ/add-control/add-control.module').then( m => m.AddControlPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./admin/CQ/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'defects',
    loadChildren: () => import('./admin/CQ/defects/defects.module').then( m => m.DefectsPageModule)
  },
  {
    path: 'add-produit',
    loadChildren: () => import('./admin/CQ/add-produit/add-produit.module').then( m => m.AddProduitPageModule)
  },
  {
    path: 'addprocess',
    loadChildren: () => import('./admin/audits/addprocess/addprocess.module').then( m => m.AddprocessPageModule)
  },
  {
    path: 'auditprocess',
    loadChildren: () => import('./admin/audits/auditprocess/auditprocess.module').then( m => m.AuditprocessPageModule)
  },
  {
    path: 'checklistprocess',
    loadChildren: () => import('./admin/audits/checklistprocess/checklistprocess.module').then( m => m.ChecklistprocessPageModule)
  },
  {
    path: 'addchecklistprocess',
    loadChildren: () => import('./admin/audits/addchecklistprocess/addchecklistprocess.module').then( m => m.AddchecklistprocessPageModule)
  },
  {
    path: 'updat-produit',
    loadChildren: () => import('./admin/CQ/updat-produit/updat-produit.module').then( m => m.UpdatProduitPageModule)
  },
  {
    path: 'add-checklist',
    loadChildren: () => import('./admin/CQ/add-checklist/add-checklist.module').then( m => m.AddChecklistPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
