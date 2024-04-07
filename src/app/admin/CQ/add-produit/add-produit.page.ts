import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from 'src/app/services/data.service';
import { Produit } from 'src/app/models/produit.model';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage implements OnInit {

  produit: Produit = {
    category: '',
    designation: '',
    reference: '',
    Famille:''

  };
  constructor(private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  ajouterProduit() {
  this.dataService.createproduit(this.produit).subscribe(data =>{
    console.log(data);
    this.router.navigate(['/produits'])
  })
  }
}
