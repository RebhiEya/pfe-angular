import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { auditProcesses } from 'src/app/models/processus.model'; // Import de l'interface auditProcesses
import { AlertController } from '@ionic/angular'; // Import de AlertController

@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.page.html',
  styleUrls: ['./addprocess.page.scss'],
})
export class AddprocessPage {

  auditprocesses: auditProcesses = {
    idProcess: 0,
    nom:'',
    recommendation: '',
    strength: '',
    weakness: '',
    checklistScore :0
  };


  constructor(private dataService: AuditprocessesService,
    private router: Router,
    private alertController: AlertController
  ) { } // Injection du service DataService

  ajouterProcesses() {
    if (this.auditprocesses.nom && this.auditprocesses.recommendation && this.auditprocesses.strength && this.auditprocesses.weakness) {
      this.dataService.addProcess(this.auditprocesses).subscribe(
        () => {
          this.presentSuccessAlert();
          this.router.navigate(['/auditprocess']);
        },
        error => {
          console.error('Erreur lors de l\'ajout du processus', error);
          // Gérer l'erreur ici, par exemple afficher une autre alerte
        }
      );
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Veuillez remplir tous les champs',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Processus ajouté avec succès',
      buttons: ['OK']
    });

    await alert.present();
  }
}
