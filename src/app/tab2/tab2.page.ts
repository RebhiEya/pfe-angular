import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authenication.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    // Vérifiez si l'utilisateur est déjà connecté
    this.authService.checkIfLoggedIn();
  }

  async setItem() {
    // Appel du service pour vérifier les informations d'identification
    await this.authService.authenticate(this.username, this.password);
  }
}
