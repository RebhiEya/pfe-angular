import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import {Qualitycontrol} from 'src/app/models/Qualitycontrol.model'

@Component({
  selector: 'app-mycontrol',
  templateUrl: './mycontrol.page.html',
  styleUrls: ['./mycontrol.page.scss'],
})
export class MycontrolPage  {

  data: any;
  showComment: boolean = false;
  teamData: any;
  controlId: string = '';


  control : Qualitycontrol = {
    idQualityControl: 0,
    reference :'',
    internalReference: '',
    date :new Date(),
    state: '',
    description: '',
  }

  constructor(private mycontrolService :MycontrolService,
    private router: Router,
    private route: ActivatedRoute) { }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.mycontrolService.getAllcontrol().subscribe((data) => {
        this.data = data;
        console.log(this.data);
    });
}

async navigateToChecklists(control: any) {
  const controlData = await this.mycontrolService.getControlById(control.id);
  console.log(this.mycontrolService);
  this.router.navigate(['/control-checklist',control.id]);
  }


  async navigateTodefect(control: any) {
    const controlData = await this.mycontrolService.getControlById(control.id);
    console.log(this.mycontrolService);
    this.router.navigate(['/control-defect',control.id]);
    }
}
