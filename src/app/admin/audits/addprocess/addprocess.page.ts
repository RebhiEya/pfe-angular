import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { auditProcesses } from 'src/app/models/processus.model'; // Import de l'interface auditProcesses

@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.page.html',
  styleUrls: ['./addprocess.page.scss'],
})
export class AddprocessPage implements OnInit {

  constructor(private dataService: DataService) { } // Injection du service DataService

  ngOnInit() {
  }

  addProcess() {
    const newProcess: auditProcesses = {
      processId: 0, // Vous pouvez initialiser processId à 0 ou à null selon votre logique
      processDesignation: '', // Vous devez spécifier la valeur ici
      recommendation: '',    // Vous devez spécifier la valeur ici
      strength: '',          // Vous devez spécifier la valeur ici
      weakness: '',          // Vous devez spécifier la valeur ici
      checklistScore: 0     // Vous devez spécifier la valeur ici
    };

    this.dataService.addProcess(newProcess).subscribe(
      (response: auditProcesses) => { // Spécification du type de response
        // Processus ajouté avec succès, vous pouvez implémenter le code pour gérer la réponse ici
      },
      (error: any) => { // Spécification du type de error
        console.error('Erreur lors de l\'ajout du processus :', error);
      }
    );
  }

}
