import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importez AlertController

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddComponent implements OnInit {

  user: User = {
    idUser: 0,
    username:'',
    firstName: '',
    lastName: '',
    matricule: '',
    password: '',
    email: '',
  };

  constructor(
    private dataService: UserService, 
    private router: Router,
    private alertController: AlertController // Injectez AlertController
  ) { }

  ngOnInit() {
  }

  async ajouterUser() {
    if (this.validateForm()) {
      this.dataService.createUser(this.user).subscribe(
        () => {
          this.router.navigate(['/user']);
        },
      );
    } else {
      // Afficher une alerte si tous les champs ne sont pas remplis
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Veuillez remplir tous les champs.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  validateForm(): boolean {
    if (!this.user.firstName || !this.user.lastName || !this.user.matricule || !this.user.password || !this.user.email) {
      return false;
    } else {
      return true;
    }
  }
}
