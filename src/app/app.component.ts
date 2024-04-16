import { Component,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuServiceService } from './services/menu.service.service';
import { IonRouterOutlet } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  showMenu: boolean;

  constructor(private menuService: MenuServiceService) {
    this.showMenu = this.menuService.getShowMenu();

  }
  @ViewChild(IonRouterOutlet, { static: true }) content: IonRouterOutlet;


}
