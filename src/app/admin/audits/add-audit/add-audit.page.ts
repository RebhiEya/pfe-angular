import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { AdminService } from 'src/app/services/admin.service';
import { Audit } from 'src/app/models/audit.model';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { auditProcesses } from 'src/app/models/processus.model';
import {ProcessChecklist} from 'src/app/models/ProcessChecklist.model';
;@Component({
  selector: 'app-add-audit',
  templateUrl: './add-audit.page.html',
  styleUrls: ['./add-audit.page.scss'],
})
export class AddAuditPage  {

  control: Audit = {
    idAudit: 0,
    category: '',
    designation: '',
    startDate: new Date(),
    endDate: new Date(),
    state: '',
    reference: ''
  };

  selectedProcess: auditProcesses = {
    idProcess: 0,
    nom: '',
    recommendation: '',
    strength: '',
    weakness: '',
    checklistScore: 0
  };

  selectedChecklists: ProcessChecklist[] = [];
  selectedUser: any;

  constructor(
    private router: Router,
    private processService: AuditprocessesService,
    private adminService: AdminService
  ) { }

  ionViewWillEnter(): void {
    this.selectedProcess = this.processService.getProcess();
    console.log("process",this.selectedProcess.idProcess)
    this.selectedChecklists = this.processService.getChecklist();
    this.selectedUser = this.adminService.getUser();
  }

  getChecklist(): void {

    if (this.selectedProcess.idProcess !== undefined && !isNaN(this.selectedProcess.idProcess)) {
      this.router.navigate(['/checklistprocess', this.selectedProcess.idProcess]);
    } else {
      console.error("ID de processus invalide.");
    }
  }

  redirectToAuditProcess(): void {
    this.router.navigate(['/auditprocess']);
  }

  addAudit(): void {
    const selectedChecklistIds = this.selectedChecklists.map(item => item.idProcessChecklist);
    this.processService.addAudit({
      audit: this.control,
      userId: this.selectedUser,
      processId: this.selectedProcess.idProcess,
      checklistIds: selectedChecklistIds
    }).subscribe(
      (data: any) => {
        console.log('Audit ajouté avec succès.', data);
        this.processService.setChecklist([]);
        // Redirigez l'utilisateur vers la page appropriée
        this.router.navigate(['/les-audits']);
      },
      (error: any) => {
        console.error('Une erreur est survenue lors de l\'ajout de l\'audit :', error);
        // Traitez l'erreur comme vous le souhaitez (par exemple, afficher un message d'erreur à l'utilisateur)
      }
    );
  }
  getuser(){
    this.router.navigate(['/equipe-audit']);

  }
}
