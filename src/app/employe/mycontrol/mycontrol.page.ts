import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import {Qualitycontrol} from 'src/app/models/Qualitycontrol.model'

@Component({
  selector: 'app-mycontrol',
  templateUrl: './mycontrol.page.html',
  styleUrls: ['./mycontrol.page.scss'],
})
export class MycontrolPage  {

  data: any; // Utilisez la variable de classe ici
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

  constructor(private mycontrolService :MycontrolService ,
    private router: Router ,

  ) { }

 ionViewWillEnter() {
     this.loadData();
    }

   loadData() {
    this.mycontrolService.getAllcontrol().subscribe((data) => {
        this.data = data;
        console.log(this.data);
    });
}
}
