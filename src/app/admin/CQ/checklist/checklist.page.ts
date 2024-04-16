import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { Produit } from 'src/app/models/produit.model';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage  {
  data: any; // Utilisez la variable de classe ici
  item :any;
  controlCheckList : any ;


  selectedProduit : Produit = {
    idProduit :0,
    category: '',
    designation: '',
    reference: '',
    famille:''

  };
  constructor(private router: Router , private productService: DataService) { }


    ionViewWillEnter() {
      this.selectedProduit = this.productService.getProduct();
      this.productService.getChecklistByProduit(this.selectedProduit.idProduit).subscribe((data) =>{
       this.controlCheckList = data
       console.log(data)
      }
      )



    }
  ajouterchecklist() {
    this.productService.createchecklist(this.controlCheckList).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/produits'])
    })
    }


}
