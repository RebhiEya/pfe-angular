import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { MenuServiceService } from '../services/menu.service.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor( private router: Router ,
     private menuService: MenuServiceService) {}

  username: string = '';
  password: string = '';

  ngOnInit() {
    this.menuService.setShowMenu(false); // Cacher le menu lors de l'initialisation de la page

  }
  async setItem(){
   this.router.navigate(['/tableau-bord']);
  //C:\Nouveau dossier (2)\myFirst\src\app\employe\tableau-bord
  }

}
