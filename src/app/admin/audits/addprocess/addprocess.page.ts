import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { auditProcesses } from 'src/app/models/processus.model'; // Import de l'interface auditProcesses


@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.page.html',
  styleUrls: ['./addprocess.page.scss'],
})
export class AddprocessPage {
  auditprocesses: auditProcesses = {
    idProcess: 0, // Vous pouvez initialiser processId à 0 ou à null selon votre logique
    nom: '', // Vous devez spécifier la valeur ici
    recommendation: '',    // Vous devez spécifier la valeur ici
    strength: '',          // Vous devez spécifier la valeur ici
    weakness: '',          // Vous devez spécifier la valeur ici
    checklistScore: 0     // Vous devez spécifier la valeur ici
  };

  constructor(private dataService: AuditprocessesService,
    private router: Router
  ) { } // Injection du service DataService

  ngOnInit() {
  }

  ajouterProcesses() {

    this.dataService.addProcess(this.auditprocesses).subscribe(
     ()=>this.router.navigate(['/auditprocess']),
    );
}
}
