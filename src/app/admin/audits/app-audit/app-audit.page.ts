import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';

@Component({
  selector: 'app-app-audit',
  templateUrl: './app-audit.page.html',
  styleUrls: ['./app-audit.page.scss'],
})
export class AppAuditPage implements OnInit {
  process: any;

  constructor(private dataService: AuditprocessesService ,
              private router: Router ,
              private alertController: AlertController,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const recivedData = this.router.getCurrentNavigation()?.extras.state;
    if (recivedData) {
      this.process = recivedData;
    }
  }

  update() {
    this.dataService.updateProcess(this.process.idProcess, this.process).subscribe(
      () => {
        // Redirection après la mise à jour du processus
        this.router.navigate(['/auditprocess']);

        // Affichage de la notification de succès
        this.presentAlert();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du processus : ', error);
        // Gérer les erreurs ici
      }
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Modification réussie',
      message: 'Le processus a été modifié avec succès.',
    });
    await alert.present();
  }
}
