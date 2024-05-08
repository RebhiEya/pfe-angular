import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from '../services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserComponent {
  data: any;
  searchTerm: string ;

  constructor(private adminService: AdminService ,
    private authService : AuthService,
    private alertController: AlertController
    ) {}

  ionViewWillEnter(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getAllUsers().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  async deleteUser(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer cet audit ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // L'utilisateur a cliqué sur Annuler, ne rien faire
          }
        }, {
          text: 'OK',
          handler: () => {
    this.adminService.deleteUser(id).subscribe((data) => {
      this.loadUsers();
    });
  }
}
]
});
await alert.present();
}

  logout(){
    this.authService.Logout()
  }
}
