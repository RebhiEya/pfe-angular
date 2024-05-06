import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { EmployeGuard } from './guard/employe.guard';



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
    canActivate: [AuthGuard , EmployeGuard],
    loadChildren: () => import('./employe/tableau-bord/tableau-bord.module').then(m => m.TableauBordPageModule)
  },
  {
    path: 'add-audit',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/add-audit/add-audit.module').then( m => m.AddAuditPageModule)
  },
  {
    path: 'checklist',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },
  {
    path: 'add-control',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/add-control/add-control.module').then( m => m.AddControlPageModule)
  },
  {
    path: 'produits',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'defects',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/defects/defects.module').then( m => m.DefectsPageModule)
  },
  {
    path: 'add-produit',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/add-produit/add-produit.module').then( m => m.AddProduitPageModule)
  },
  {
    path: 'addprocess',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/addprocess/addprocess.module').then( m => m.AddprocessPageModule)
  },
  {
    path: 'auditprocess',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/auditprocess/auditprocess.module').then( m => m.AuditprocessPageModule)
  },
  {
    path: 'checklistprocess/:idProcess',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/checklistprocess/checklistprocess.module').then( m => m.ChecklistprocessPageModule)
  },
  {
    path: 'les-audits',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/les-audits/les-audits.module').then( m => m.LesAuditsPageModule)
  },
  {
    path: 'addchecklistprocess/:idProcess',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/addchecklistprocess/addchecklistprocess.module').then( m => m.AddchecklistprocessPageModule)
  },
  {
    path: 'updat-produit',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/updat-produit/updat-produit.module').then( m => m.UpdatProduitPageModule)
  },
  {
    path: 'add-checklist',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/add-checklist/add-checklist.module').then( m => m.AddChecklistPageModule)
  },
  {
    path: 'app-audit',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/audits/app-audit/app-audit.module').then( m => m.AppAuditPageModule)
  },
  {
    path: 'control-checklist',
    canActivate: [AuthGuard , EmployeGuard],
    loadChildren: () => import('./employe/QC/control-checklist/control-checklist.module').then( m => m.ControlChecklistPageModule)
  },
  {
    path: 'control-defect',
    canActivate: [AuthGuard , EmployeGuard],
    loadChildren: () => import('./employe/QC/control-defect/control-defect.module').then( m => m.ControlDefectPageModule)
  },
  {
    path: 'mycontrol',
    canActivate: [AuthGuard , EmployeGuard],
    loadChildren: () => import('./employe/QC/mycontrol/mycontrol.module').then( m => m.MycontrolPageModule)
  },

  {
    path: 'process',
    canActivate: [AuthGuard , EmployeGuard],
    loadChildren: () => import('./employe/process/process.module').then( m => m.ProcessPageModule)
  },
  {
    path: 'my-audit',
    canActivate: [AuthGuard , EmployeGuard],
    loadChildren: () => import('./employe/my-audit/my-audit.module').then( m => m.MyAuditPageModule)
  },
  {
  path: 'useradd',
  canActivate: [AuthGuard ,AdminGuard],
  loadChildren: () => import('./useradd/useradd.module').then( m => m.UseraddPageModule),
  },
  {
    path: 'user',
    canActivate: [AuthGuard ,AdminGuard],
      loadChildren: () => import('./user/user.module').then( m => m.UserPageModule),
    },

  {
    path: 'tabbord',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/tabbord/tabbord.module').then( m => m.TabbordPageModule)
  },
  {
    path: 'control',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/control/control.module').then( m => m.ControlPageModule)
  },
  {
    path: 'equipe',
    canActivate: [AuthGuard ,AdminGuard],
    loadChildren: () => import('./admin/CQ/equipe/equipe.module').then( m => m.EquipePageModule)
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./unauthorized/unauthorized.module').then( m => m.UnauthorizedPageModule)
  },
  {
    path: 'unauthorize',
    loadChildren: () => import('./unauthorize/unauthorize.module').then( m => m.UnauthorizePageModule)
  },
  {
    path: 'equipe-audit',
    canActivate: [AuthGuard , AdminGuard],
    loadChildren: () => import('./admin/audits/equipe-audit/equipe-audit.module').then( m => m.EquipeAuditPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],

})
export class AppRoutingModule {}
