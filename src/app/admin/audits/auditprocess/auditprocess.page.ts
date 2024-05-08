import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { auditProcesses } from 'src/app/models/processus.model';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-processus',
  templateUrl: './auditprocess.page.html',
  styleUrls: ['./auditprocess.page.scss'],
})
export class ProcessusPage {
  data: any;
  processes: auditProcesses[] = [];
  auditId: number = 0;
  item: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private processesService: AuditprocessesService,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.processesService.getAllProcesses().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  async delete(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // L'utilisateur a cliqué sur Annuler, ne rien faire
          }
        }, {
          text: 'OK',
          handler: () => {
            // L'utilisateur a cliqué sur OK, supprimer l'élément
            this.processesService.deleteProsses(id).subscribe((data) => {
              this.data = data;
            });
          }
        }
      ]
    });

    await alert.present();
  }


  update(process: any) {
    this.router.navigate(['/app-audit'], { state: process });
  }

  redirectToAddProcess() {
    this.router.navigate(['/addprocess']);
  }

  goToProcessDetails(processId: any) {
    this.router.navigate(['/add-audit'], { state: { processId: processId } });
  }

  redirectToChecklistProcessPage(idProcess: number) {
    this.router.navigate(['/checklistprocess', idProcess]); // Utilise simplement le processId comme paramètre dans l'URL
  }

  selectProcess(process : any){
    this.processesService.setProcess(process);
    this.router.navigate(['/add-audit'])
  }

}




