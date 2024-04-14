import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { auditProcesses } from 'src/app/models/processus.model';

@Component({
  selector: 'app-processus',
  templateUrl: './auditprocess.page.html',
  styleUrls: ['./auditprocess.page.scss'],
})
export class ProcessusPage implements OnInit {
  processes: auditProcesses[] = [];
  auditId: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const auditIdParam = params.get('auditId');
      if (auditIdParam !== null) {
        this.auditId = +auditIdParam;
      }
      this.getProcessesByAudit(this.auditId);
    });
  }

  getProcessesByAudit(auditId: number) {
    this.dataService.getProcessesByAudit(auditId).subscribe(
      (response: auditProcesses[]) => {
        this.processes = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des processus liés à l\'audit :', error);
      }
    );
  }

  redirectToAddProcess() {
    this.router.navigate(['/addprocess']);
  }

  // Méthode pour rediriger vers les détails d'un processus
  goToProcessDetails(processId: any) {
    // Implémentez cette méthode en fonction de vos besoins
  }
}
