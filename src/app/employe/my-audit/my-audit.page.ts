import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import {Audit} from 'src/app/models/audit.model'
import { AuthService } from 'src/app/services/auth.service';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-my-audit',
  templateUrl: './my-audit.page.html',
  styleUrls: ['./my-audit.page.scss'],
})
export class MyAuditPage  {
  data: any;
  showComment: boolean = false;
  teamData: any;
  controlId: string = '';
  currentUser : any = {};
item:any;
  control : Audit = {
    idAudit:0,
   category:'',
   designation:'',
  startDate: new Date(),
   endDate:new Date(),
  state:'',
  reference:'',
}

  constructor(private AuditprocessesService :AuditprocessesService,
    private authService : AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe) { }

  ionViewWillEnter() {
    this.loadData();
    this.currentUser = this.authService.getCurrentUser();


  }

  loadData() {
    const currentUser = this.authService.getCurrentUser();
    this.AuditprocessesService.getControlByIdUser(currentUser.idUser).subscribe((data) => {
      this.data = data.map(item => ({
        ...item,
        date: this.datePipe.transform(item.date, 'yyyy-MM-dd')
      }));      console.log(this.data);
  });

}
navigateToChecklist(id :number){
  this.router.navigate(['/checklistprocesss'],{ queryParams: { id: id }});
}



logout(){
  this.authService.Logout()
}

}
