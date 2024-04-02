import { Component } from '@angular/core';
 import { MenuPage } from './employe/menu/menu.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  rootPage : any = MenuPage;

constructor(){}
}
