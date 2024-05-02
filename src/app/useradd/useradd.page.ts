import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddComponent {

  user: User = {
    idUser: 0,
    username:'',
    firstName: '',
    lastName: '',
    matricule: '',
    password: '',
    email: '',
  };


  constructor(private adminService: AdminService,
      private router: Router ,
       private alertController: AlertController
  ) { }


  ajouterUser() {
      if (this.user.firstName && this.user.lastName && this.user.matricule) {
        this.adminService.createUser(this.user).subscribe(
          () => {
            this.router.navigate(['/user']);
          },
          error => {
            console.error('Erreur lors de l\'ajout du produit', error);
            // Gérer l'erreur ici, par exemple afficher une autre alerte
          }
        );

      }
    }





  // ajouterUser() {
  //   this.dataService.createUser(this.user).subscribe(
  //     () => {
  //       this.router.navigate(['/user']);
  //     },
  //     error => {
  //       console.error('Error creating user:', error);
  //     }
  //   );
  // }



}
