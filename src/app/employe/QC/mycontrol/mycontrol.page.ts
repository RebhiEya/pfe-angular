import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import {Qualitycontrol} from 'src/app/models/Qualitycontrol.model'
import { AuthService } from 'src/app/services/auth.service';

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
  currentUser : any = {};

  control : Qualitycontrol = {
    idQualityControl: 0,
    reference :'',
    internalReference: '',
    date :new Date(),
    state: '',
    description: '',
  }

  constructor(private mycontrolService :MycontrolService, private authService : AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ionViewWillEnter() {
    this.loadData();
    this.currentUser = this.authService.getCurrentUser();


  }

  loadData() {
    this.mycontrolService.all_qualiyControl().subscribe((data) => {
      this.data = data;
      console.log(this.data);
  });
    // const currentUser = this.authService.getCurrentUser();
    // this.mycontrolService.getControlByIdUser(currentUser.idUser).subscribe((data) => {
    //     this.data = data;
    //     console.log(this.data);
    // });
}
navigateToChecklist(id :number){
  this.router.navigate(['/control-checklist'],{ queryParams: { id: id }});
}

navigateTodetails(id :number){
  this.router.navigate(['/details'],{ queryParams: { id: id }});

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
