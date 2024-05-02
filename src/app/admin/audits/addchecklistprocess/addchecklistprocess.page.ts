import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { ProcessChecklist } from 'src/app/models/ProcessChecklist.model';
import { auditProcesses } from 'src/app/models/processus.model';
import { DataService } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addchecklistprocess',
  templateUrl: './addchecklistprocess.page.html',
  styleUrls: ['./addchecklistprocess.page.scss'],
})
export class AddchecklistprocessPage  {
  controlCheckList : ProcessChecklist = {
    idProcessChecklist:0,
    requirement : '',
    category : '',
    state : '',
    conformity : true,
    description : '',
    }
    selectedProcess: auditProcesses ={
     
        idProcess:0,
          nom: '',
          recommendation: '',
          strength: '',
          weakness: '',
          checklistScore: 0
      
          
    }
    ionViewWillEnter() {
      this.route.params.subscribe(params => {
        this.selectedProcess.idProcess= params['idProcess'];
      })
      console.log("hiiii",this.selectedProcess.idProcess)
    }
    constructor(private checklistService: AuditprocessesService,
      private dataService:DataService,
      private router: Router,private alertController: AlertController,private route: ActivatedRoute) { }

     
      ajouterchecklist() {
        if (this.selectedProcess && this.controlCheckList) {
          this.checklistService.createchecklistprocess(this.selectedProcess.idProcess, this.controlCheckList)
            .subscribe(
              () => {
                console.log('Checklist ajoutée avec succès');
                this.router.navigate(['/checklistprocess', this.selectedProcess.idProcess]); // Redirection vers la liste de checklists spécifique à ce processus
              },
              (error) => {
                console.error('Erreur lors de l\'ajout de la checklist :', error);
              }
            );
        } else {
          console.error('Veuillez sélectionner un processus et remplir tous les champs de la checklist.');
        }
      }
    

        }
