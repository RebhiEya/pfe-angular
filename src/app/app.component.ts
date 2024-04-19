import { Component,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  showMenu: boolean;

  constructor() {defineCustomElements(window)}


}
