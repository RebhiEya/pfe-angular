import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {  ProcessChecklist } from 'src/app/models/ProcessChecklist.model'; 
@Component({
  selector: 'app-addchecklistprocess',
  templateUrl: './addchecklistprocess.page.html',
  styleUrls: ['./addchecklistprocess.page.scss'],
})
export class AddchecklistprocessPage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  customPopoverOptions = {
    header: 'conformity',
    subHeader: 'Select conformity',
    message: 'Only select your conformity',
  };
  addchecklistProcess() {
   

}
}
