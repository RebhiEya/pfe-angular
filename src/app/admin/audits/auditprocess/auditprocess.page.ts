import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { auditProcesses } from 'src/app/models/processus.model';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';

@Component({
  selector: 'app-processus',
  templateUrl: './auditprocess.page.html',
  styleUrls: ['./auditprocess.page.scss'],
})
export class ProcessusPage implements OnInit {
  data: any;
  processes: auditProcesses[] = [];
  auditId: number = 0;
  item: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private processesService: AuditprocessesService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.processesService.getAllProcesses().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  delete(id: any) {
    this.processesService.deleteProsses(id).subscribe((data) => {
      this.data = data;
    });
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




