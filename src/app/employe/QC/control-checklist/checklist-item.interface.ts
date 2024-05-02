// checklist-item.interface.ts
export interface ChecklistItem {
  checklist: {
    idControlCheckList: number;
    category: string;
    operation: string;
    criteria: string;
    measures: string;
    // Autres propriétés de la checklist
  };
  conformity: boolean;
  // Autres propriétés de l'élément de la checklist
}

// control-checklist.page.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ChecklistItem } from './checklist-item.interface';

@Component({
  selector: 'app-control-checklist',
  templateUrl: './control-checklist.page.html',
  styleUrls: ['./control-checklist.page.scss'],
})
export class ControlChecklistPage {
  idControl: number;
  data: ChecklistItem[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private checklistService: ChecklistService
  ) {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe((params) => {
      this.idControl = params['id'];
    });
    this.loadData();
  }

  loadData() {
    this.checklistService.getChecklistByControl(this.idControl).subscribe((data) => {
      this.data = data;
      console.log('Data:', this.data);
    });
  }

  updateConformity(itemId: number, conformity: boolean) {
    this.checklistService.updateConformity(this.idControl, itemId, conformity).subscribe(() => {
      console.log('Conformity updated successfully');
    });
  }

  selectConform(item: ChecklistItem) {
    item.conformity = true;
    this.updateConformity(item.checklist.idControlCheckList, true);
  }

  selectNonConform(item: ChecklistItem) {
    item.conformity = false;
    this.updateConformity(item.checklist.idControlCheckList, false);
  }
}
