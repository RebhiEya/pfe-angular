import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddAuditPageRoutingModule } from './add-audit-routing.module';
import { AddAuditPage } from './add-audit.page';

const routes: Routes = [
  {
    path: '',
    component: AddAuditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AddAuditPageRoutingModule
  ],
  declarations: [AddAuditPage]
})
export class AddAuditPageModule {}
