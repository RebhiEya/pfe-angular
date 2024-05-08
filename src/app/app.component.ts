import { Component,OnInit,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit{

  showMenu: boolean = false;
  role :String

  constructor(private authService:AuthService,private router: Router , private menuController: MenuController) {defineCustomElements(window)}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    // Assuming currentUser contains role information
    this.role = currentUser.roles
  }
  isAuthenticationPage(): boolean {
    return this.router.url === '/authentification'; // Replace '/authentication' with the actual route of your authentication page
  }
  closeMenu(): void {
    this.menuController.close(); // Close the menu
  }
  logout(){

    this.authService.Logout()
  }

}
