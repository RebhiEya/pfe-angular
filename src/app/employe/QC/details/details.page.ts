import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import { ChecklistService } from 'src/app/services/checklist.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  data: any;
  checklist: any;

  idControl : number



  constructor(private mycontrolService : MycontrolService , private ChecklistService : ChecklistService ,
     private route: ActivatedRoute) { }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.idControl= params['id'];
    })
    this.loadData();
    this.loadchecklist()
  }

  loadData() {
    this.mycontrolService.all_qualiyControl().subscribe((data) => {
      this.data = data;
      console.log(this.data);
  });
  }

  loadchecklist (){
    this.ChecklistService.getChecklistByControl(this.idControl).subscribe((data) => {
      this.checklist = data;
      console.log("fff",this.data);
  });
  }
}
