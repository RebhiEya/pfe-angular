import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Produit } from 'src/app/models/produit.model';
import { AlertController } from '@ionic/angular'; // Import de AlertController


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage {

  produit: Produit = {
    idProduit:0,
    category: '',
    designation: '',
    reference: '',
    famille:''

  };
  constructor(private dataService: DataService,
    private router: Router,
    private alertController: AlertController

  ) { }

  ajouterProduit() {
    if (this.produit.reference && this.produit.category && this.produit.designation) {
      this.dataService.createproduit(this.produit).subscribe(
        () => {
          this.presentSuccessAlert();
          this.router.navigate(['/produits']);
        },
        error => {
          console.error('Erreur lors de l\'ajout du produit', error);
          // Gérer l'erreur ici, par exemple afficher une autre alerte
        }
      );
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Veuillez remplir tous les champs',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Produit ajouté avec succès',
      buttons: ['OK']
    });

    await alert.present();
  }


//    ajouterProduit() {

//        this.dataService.createproduit(this.produit).subscribe(
//         ()=>this.router.navigate(['/produits']),
//        );
// }
}
