import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage {

  constructor(private router: Router) {}

  setItem() {
    // Redirection vers la page 'tableau-bord'
    this.router.navigate(['/tableau-bord']);
  }
}
