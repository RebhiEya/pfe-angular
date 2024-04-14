import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Produit } from 'src/app/models/produit.model';


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
    private router: Router
  ) { }


   ajouterProduit() {

       this.dataService.createproduit(this.produit).subscribe(
        ()=>this.router.navigate(['/produits']),
       );
}
}
