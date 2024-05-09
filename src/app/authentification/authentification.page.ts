
// authentification.page.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { AuditprocessesService } from '../services/auditprocesses.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage {
  credentials = { email: '', password: '' };
  error: string = '';
  isAdmin: boolean;
  isEmployee: boolean;

  constructor(private authService: AuthService, private router: Router ,  private processesService: AuditprocessesService,
    private alertController: AlertController) {}

  onLogin() {
    this.authService.login(this.credentials.email , this.credentials.password)
      .subscribe(
        response => {
          if (response.roles[0] === "ADMIN"){
            this.isAdmin = true;
          } else if (response.roles[0] === "EMPLOYEE"){
            this.isEmployee = true;
          }

          localStorage.setItem('currentUser', JSON.stringify({
            loginToken: response.jwt,
            roles: response.roles[0],
            idUser: response.id,
            isEmployee: this.isEmployee,
            isAdmin: this.isAdmin,
            name: response.name,
            expiration: moment().add(1,'days').toDate()
          }));

          switch(response.roles[0]) {
            case 'ADMIN':
              this.router.navigate(['/tabbord']);
              break;
            case 'EMPLOYEE':
              this.router.navigate(['/tableau-bord']);
              break;
            default:
              this.router.navigate(['tabbord']);
              break;
          }
        },
        async error => {

          const alert =  this.alertController.create({
            header: 'ERREUR',
            message: 'Email ou mot de passe invalide',
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  // L'utilisateur a cliqué sur Annuler, ne rien faire
                }
              }
              
            ]
          });
      
           (await alert).present();

        }
      );
  }
}

