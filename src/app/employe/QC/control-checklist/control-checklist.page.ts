import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { ChecklistService } from 'src/app/services/checklist.service';

@Component({
  selector: 'app-control-checklist',
  templateUrl: './control-checklist.page.html',
  styleUrls: ['./control-checklist.page.scss'],
})
export class ControlChecklistPage {

  idControl : number
  tickClicked: boolean = true;
  crossClicked: boolean = false;
  conformity: boolean = false; // Champ pour indiquer si l'élément est conforme
  data: any;
  selectedButton: string;
  selectedChecklists: ControlCheckList[] = [];
  cards: { selectedButton: string }[] = [];
  constructor(  private router: Router , private route: ActivatedRoute , private ChecklistService : ChecklistService) {
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.idControl= params['id'];
    })
    this.loadData();


    for (let i = 0; i < this.data.length; i++) {
      this.cards.push({ selectedButton: 'button1' }); // Initialize each card with 'button1' selected
    }
  }
  loadData() {
    this.ChecklistService.getChecklistByControl(this.idControl).subscribe((data) => {
        this.data = data.map(item => ({ ...item, selectedButton: null }));
        console.log("fff",this.data);
    });
}

updateConformity(itemId: number, conformity: boolean) {
  this.ChecklistService.updateConformity(this.idControl,itemId, conformity).subscribe(() => {
    console.log("Conformity updated successfully");
});
}
  updatChecklist(){
    this.router.navigate(['/mycontrol'])
  }
  async Conform(item: any) {
    item.selectedButton = 'Conform';
    this.updateConformity(item.checklist.idControlCheckList, true);
  }

  async nonConform(item: any) {
    item.selectedButton = 'Non Conform';
    this.updateConformity(item.checklist.idControlCheckList, false);
  }

  toggleSelection(checklist: ControlCheckList) {
    const index = this.selectedChecklists.findIndex(item => item.idControlCheckList === checklist.idControlCheckList);
    if (index !== -1) {
      this.selectedChecklists.splice(index, 1); // Deselect if already selected
    } else {
      this.selectedChecklists.push(checklist); // Select if not already selected
    }
  }

  isSelected(checklist: ControlCheckList): boolean {
    this.selectedChecklists = this.ChecklistService.getChecklist(); // Get selected checklists from service
    return this.selectedChecklists.some(item => item.idControlCheckList === checklist.idControlCheckList);
  }

  saveSelectedChecklists() {
    // Save the selected checklists to the ControlService for the new Control
    console.log("Selected Checklists:", this.data);
    this.ChecklistService.saveChecklists(this.data).subscribe(() => {
      console.log("Selected checklists saved successfully");
      this.router.navigate(['/mycontrol']);
    });
  }

  // async Conform(itemId: number) {
  //   this.conformity = true;
  //   this.updateConformity(itemId, this.conformity);
  // }

  // async nonConform(itemId: number) {
  //   this.conformity = false;
  //   this.updateConformity(itemId, this.conformity);
  // }
}
