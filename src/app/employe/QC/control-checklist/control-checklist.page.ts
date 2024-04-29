import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  toggleTick() {
    this.tickClicked = !this.tickClicked;
    this.crossClicked = true; // Assurez-vous que l'autre bouton est désactivé
    this.conformity = true; // Marque l'élément comme conforme

  }
  toggleCross() {
    this.crossClicked = !this.crossClicked;
    this.tickClicked = false; // Assurez-vous que l'autre bouton est désactivé
    this.conformity = false; // Marque l'élément comme non conforme

  }
  constructor(  private router: Router , private route: ActivatedRoute , private ChecklistService : ChecklistService) { }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.idControl= params['id'];
    })
    this.loadData();
  }
  loadData() {

    this.ChecklistService.getChecklistByControl(this.idControl).subscribe((data) => {
        this.data = data;
        console.log("fff",this.data);
    });
}

updateConformity(itemId: number, conformity: boolean) {
  this.ChecklistService.updateConformity(itemId, conformity).subscribe(() => {
    console.log("Conformity updated successfully");
  }, error => {
    console.error("Error updating conformity:", error);
  });
}
  updatChecklist(){
    this.router.navigate(['/mycontrol'])
  }

  async Conform(itemId: number) {
    this.conformity = true;
    this.updateConformity(itemId, this.conformity);
  }

  async nonConform(itemId: number) {
    this.conformity = false;
    this.updateConformity(itemId, this.conformity);
  }
}
