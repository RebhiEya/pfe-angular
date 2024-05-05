import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { ProcessChecklist } from 'src/app/models/ProcessChecklist.model';
@Component({
  selector: 'app-checklistprocess',
  templateUrl: './checklistprocess.page.html',
  styleUrls: ['./checklistprocess.page.scss'],
})
export class ChecklistprocessPage {
  data: any = [];
  idProcess: number;
  
 
  selectedChecklists: ProcessChecklist[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: AuditprocessesService
  ) { }

  ionViewWillEnter() {
    this.route.params.subscribe(params => {
      if (params['idProcess']) {
        this.idProcess = +params['idProcess'];  // Convert to number and store
        this.loadData(this.idProcess);
      }
    });
  }

  loadData(processId: number) {
    this.dataService.getChecklistByProcess(processId).subscribe(
      (data: ProcessChecklist[]) => {
        this.data = data;
        console.log("Checklists chargées avec succès :", this.data);
      },
      (error) => {
        console.error("Erreur lors du chargement des checklists :", error);
      }
    );
  }

  // deleteItem(id: any) {
  //   console.log("id",id)
  //   this.dataService.deleteProcessChecklist(id).subscribe(
  //     () => {
  //       // If deletion is successful, reload the data to update the display
  //       this.loadData(this.idProcess);
  //       console.log('Checklist successfully deleted.');
  //     },
  //     (error: any) => {
  //       console.error('An error occurred while deleting the checklist:', error);
  //     }
  //   );
  // }
  

  navigateToAddChecklistProcess() {

    if (this.idProcess !== undefined && !isNaN(this.idProcess)) {
      this.router.navigate(['/addchecklistprocess', this.idProcess]);
    } else {
      console.error("ID de processus invalide.");
    }
  }
  toggleSelection(checklist: ProcessChecklist) {
    const index = this.selectedChecklists.findIndex(item => item.idProcessChecklist === checklist.idProcessChecklist);
    if (index !== -1) {
      this.selectedChecklists.splice(index, 1); // Deselect if already selected

    } else {
      this.selectedChecklists.push(checklist); // Select if not already selected

    }
  }

  
  isSelected(checklist: ProcessChecklist): boolean {
    this.selectedChecklists = this.dataService.getChecklist(); // Get selected checklists from service
    return this.selectedChecklists.some(item => item.idProcessChecklist === checklist.idProcessChecklist);
  }

  saveSelectedChecklists() {
    // Save the selected checklists to the ControlService for the new Control
    console.log(this.selectedChecklists)
    this.dataService.setChecklist(this.selectedChecklists);


     this.router.navigate(['/add-audit'] );
  }
  isItemCompleted(item: any): boolean {
    return item.completed || false; // Return true if completed, false if not set
  }
}
