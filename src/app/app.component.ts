import { Component,OnInit,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Update menu based on current route
        this.getRole();
      }
    });

    // Initial menu update
    this.getRole();
  }

  closeMenu(): void {
    this.menuController.close(); // Close the menu
  }
  logout(){

    this.authService.Logout()
    this.showMenu = false;
  }
  getRole(){
    const currentUser = this.authService.getCurrentUser();
    // Assuming currentUser contains role information

    if(currentUser){
      this.showMenu = true
    this.role = currentUser.roles
    }
  }

}
