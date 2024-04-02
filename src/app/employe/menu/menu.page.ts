import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {
  }

  navigateToPage(page: string) {
    switch (page) {
      case 'Accueil':
        this.router.navigate(['/home']); // Remplacez 'home' par le nom de votre page d'accueil
        break;
      case 'Profil':
        this.router.navigate(['/profile']); // Remplacez 'profile' par le nom de votre page de profil
        break;
      // Ajoutez d'autres cas pour d'autres pages
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
