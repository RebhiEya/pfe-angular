import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage  {
  data: any;
  //showComment: boolean = false;
  item :any;

  constructor(private dataService: DataService ,
      private router: Router ,
      private toastController: ToastController,
      private route: ActivatedRoute,
      private alertController: AlertController
    ) {}

  ionViewWillEnter() {
    this.loadData();
    }

  loadData() {
    this.dataService.getAllProduit().subscribe((data) => {
        this.data = data;
        console.log(this.data);
    });
  }


  selectProduit(produit : any){
    this.dataService.setProduct(produit);
    this.router.navigate(['/add-control'])
  }

  async delete(id : any){
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer cet produit ?',
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
    this.dataService.deleteProduit(id).subscribe((data)=> {
      this.data = data
    });
  }
}
]
});

await alert.present();
}

  update(produit : any){
  this.router.navigate(['/updat-produit'],{ state:produit })
  }

  }

