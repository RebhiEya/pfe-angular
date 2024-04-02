import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checklistprocess',
  templateUrl: './checklistprocess.page.html',
  styleUrls: ['./checklistprocess.page.scss'],
})
export class ChecklistprocessPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  redirectToAddChecklistProcess() {
    this.router.navigate(['/addchecklistprocess']);
  }


  }
