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
  conformity: boolean = false; // Champ pour indiquer si l'élément est conforme


  toggleTick() {
    this.tickClicked = !this.tickClicked;
    this.crossClicked = true; // Assurez-vous que l'autre bouton est désactivé
    this.conformity = true; // Marque l'élément comme conforme

  }
  toggleCross() {
    this.crossClicked = !this.crossClicked;
    this.tickClicked = false; // Assurez-vous que l'autre bouton est désactivé
    this.conformity = false; // Marque l'élément comme non conforme

  }
  constructor(  private router: Router ) { }

  ngOnInit() {
  }

  updatChecklist(){
    this.router.navigate(['/mycontrol'])
  }

  async Conform(){
    this.toggleTick(); // Met à jour l'icône de coche
  }


  async nonConform(){
    this.toggleCross(); // Met à jour l'icône de croix
  }
}
