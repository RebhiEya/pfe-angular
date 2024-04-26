import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full'
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationPageModule),
  },
  {
    path: 'tableau-bord',
    loadChildren: () => import('./employe/tableau-bord/tableau-bord.module').then(m => m.TableauBordPageModule)
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
  {
    path: 'app-audit',
    loadChildren: () => import('./admin/audits/app-audit/app-audit.module').then( m => m.AppAuditPageModule)
  },
  {
    path: 'control-checklist',
    loadChildren: () => import('./employe/QC/control-checklist/control-checklist.module').then( m => m.ControlChecklistPageModule)
  },
  {
    path: 'control-defect',
    loadChildren: () => import('./employe/QC/control-defect/control-defect.module').then( m => m.ControlDefectPageModule)
  },
  {
    path: 'mycontrol',
    loadChildren: () => import('./employe/QC/mycontrol/mycontrol.module').then( m => m.MycontrolPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./employe/QC/details/details.module').then( m => m.DetailsPageModule)
  },



  {
    path: 'process',
    loadChildren: () => import('./employe/audit/process/process.module').then( m => m.ProcessPageModule)
  },
  {
    path: 'my-audit',
    loadChildren: () => import('./employe/audit/my-audit/my-audit.module').then( m => m.MyAuditPageModule)
  },
  {
  path: 'useradd',
    loadChildren: () => import('./useradd/useradd.module').then( m => m.UseraddPageModule),
  },
  {
    path: 'user',
      loadChildren: () => import('./user/user.module').then( m => m.UserPageModule),
    },  {
    path: 'tabbord',
    loadChildren: () => import('./admin/tabbord/tabbord.module').then( m => m.TabbordPageModule)
  },
  {
    path: 'control',
    loadChildren: () => import('./admin/CQ/control/control.module').then( m => m.ControlPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./admin/CQ/equipe/equipe.module').then( m => m.EquipePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],

})
export class AppRoutingModule {}
