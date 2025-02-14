import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import {Qualitycontrol} from 'src/app/models/Qualitycontrol.model'
import { AuthService } from 'src/app/services/auth.service';
import { Controldefect } from 'src/app/models/Controldefect.model';
import { EmployeService } from 'src/app/services/employe.service';
import { DatePipe } from '@angular/common';


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

  controldefect :Controldefect ={
    idControlDefect : 0,
    category : '',
    code : '',
    quantity: '',
    description: ''
  }

  selecteddefect: Controldefect[] = [];

  constructor(private mycontrolService :MycontrolService, private authService : AuthService,
    private employeService : EmployeService,
    private router: Router,
    private route: ActivatedRoute, private datePipe: DatePipe) {}

  ionViewWillEnter() {
    this.selecteddefect = this.employeService.getDefect();
    this.loadData();
  }

  loadData() {
    const currentUser = this.authService.getCurrentUser();
    this.mycontrolService.getControlByIdUser(currentUser.idUser).subscribe((data) => {
      this.data = data.map(item => ({
        ...item,
        date: this.datePipe.transform(item.date, 'yyyy-MM-dd')
      }));
      console.log(this.data);
    });
  }


  sortByDate() {
    // Tri des éléments par date
    this.data.sort((a: any, b: any) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  sortOldDatesFirst() {
    // Tri des éléments pour afficher les anciennes dates en premier
    this.data.sort((a: any, b: any) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }


//   loadData() {
//     const currentUser = this.authService.getCurrentUser();
//      this.mycontrolService.getControlByIdUser(currentUser.idUser).subscribe((data) => {
//          this.data = data;
//          console.log(this.data);
//      });
// }
navigateToChecklist(id :number){
  this.router.navigate(['/control-checklist'],{ queryParams: { id: id }});
}

navigateTodetails(id :number){
  this.router.navigate(['/details'],{ queryParams: { id: id }});

}

  navigateTodefect(id :number) {
    // const controlData = await this.mycontrolService.getControlById(control.id);
    // console.log(this.mycontrolService);
    this.router.navigate(['/control-defect'],{ queryParams: { id: id }});
    }

    logout(){
      this.authService.Logout()
    }
}
