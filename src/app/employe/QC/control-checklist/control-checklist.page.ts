import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-checklist',
  templateUrl: './control-checklist.page.html',
  styleUrls: ['./control-checklist.page.scss'],
})
export class ControlChecklistPage implements OnInit {

  tickClicked: boolean = true;
  crossClicked: boolean = false;

  toggleTick() {
    this.tickClicked = !this.tickClicked;
    this.crossClicked = true; // Assurez-vous que l'autre bouton est désactivé
  }
  toggleCross() {
    this.crossClicked = !this.crossClicked;
    this.tickClicked = false; // Assurez-vous que l'autre bouton est désactivé
  }
  constructor(  private router: Router ) { }

  ngOnInit() {
  }

  updatChecklist(){
    this.router.navigate(['/mycontrol'])


  }



}
