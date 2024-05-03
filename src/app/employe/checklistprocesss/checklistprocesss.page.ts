import { Component, OnInit } from '@angular/core';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checklistprocesss',
  templateUrl: './checklistprocesss.page.html',
  styleUrls: ['./checklistprocesss.page.scss'],
})
export class ChecklistprocesssPage implements OnInit {

  constructor(  private router: Router , private route: ActivatedRoute , private ChecklistService : AuditprocessesService) { }

  ngOnInit() {
  }
  idAudit : number

  conformity: boolean = false; // Champ pour indiquer si l'élément est conforme
  data: any;


  

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.idAudit= params['id'];
    })
    this.loadData();
  }
  loadData() {

    this.ChecklistService.getChecklistByaudit(this.idAudit).subscribe((data) => {
        this.data = data;
        console.log("fff",this.data);
    });
}

// updateConformity(itemId: number, conformity: boolean) {
//   this.ChecklistService.updateConformity(itemId, conformity).subscribe(() => {
//     console.log("Conformity updated successfully");
//   }, error => {
//     console.error("Error updating conformity:", error);
//   });
// }
//   updatChecklist(){
//     this.router.navigate(['/mycontrol'])
//   }

//   async Conform(itemId: number) {
//     this.conformity = true;
//     this.updateConformity(itemId, this.conformity);
//   }

//   async nonConform(itemId: number) {
//     this.conformity = false;
//     this.updateConformity(itemId, this.conformity);
//   }
markAs(checklistId: number) {
  this.updateConformity(checklistId, true);
}

MarkAs(checklistId: number) {
  this.updateConformity(checklistId, false);
}
updateConformity(checklistId: number, conformity: boolean) {
  this.ChecklistService.updateConformity(this.idAudit, checklistId, conformity).subscribe(() => {
    console.log("Conformity updated successfully");
    // Rechargement des données après la mise à jour de la conformité
    this.loadData();
  }, error => {
    console.error("Error updating conformity:", error);
  });
}
}



