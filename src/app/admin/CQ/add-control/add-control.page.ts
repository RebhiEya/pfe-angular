import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.page.html',
  styleUrls: ['./add-control.page.scss'],
})
export class AddControlPage  {

  selectedProduit : Produit = {
    idProduit:0,
    category: '',
    designation: '',
    reference: '',
    famille:''

  };

  constructor(  private router: Router , private productService: DataService) { }

  ionViewWillEnter() {
    this.selectedProduit = this.productService.getProduct();
    console.log("hh",this.selectedProduit)

  }

  getChecklist(){
    this.router.navigate(['/checklist'])
  }
  ajouter() {
    // Logique à exécuter lorsque le bouton "Ajouter" est cliqué
    console.log('Bouton "Ajouter" cliqué');
  }
}
