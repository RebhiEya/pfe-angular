import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProcessChecklist } from 'src/app/models/ProcessChecklist.model';

@Component({
  selector: 'app-checklistprocess',
  templateUrl: './checklistprocess.page.html',
  styleUrls: ['./checklistprocess.page.scss'],
})
export class ChecklistprocessPage implements OnInit {

  processId!: number;
  checklists!: ProcessChecklist[]; // Déclarer les propriétés avec un initialisateur pour éviter l'erreur

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Ajout du service Router
    private dataService: DataService
  ) { }

  ngOnInit() {
    // Récupérer l'ID du processus à partir de l'URL
    this.route.params.subscribe(params => {
      this.processId = +params['id'];
      // Appeler la méthode pour récupérer les checklists associés à ce processus
     // this.getChecklistsByProcess(this.processId);
    });
  }

  // getChecklistsByProcess(processId: number) {
  //   this.dataService.getChecklistsByProcess(processId).subscribe(
  //     (response: ProcessChecklist[]) => {
  //       this.checklists = response;
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des checklists :', error);
  //     }
  //   );
  // }

  // Méthode pour rediriger vers l'ajout d'une checklist pour ce processus
  redirectToAddchecklistProcess(){
    this.router.navigate(['/addchecklistprocess']);

  }

}
