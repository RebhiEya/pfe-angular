import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage  {
  data: any;
  showComment: boolean = false;
  item :any;

  constructor(private dataService: DataService ,
      private router: Router ,
      private toastController: ToastController,
      private route: ActivatedRoute) {}

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

   delete(id : any){
    this.dataService.deleteProduit(id).subscribe((data)=> {
      this.data = data
     });
  }
  update(produit : any){
   this.router.navigate(['/updat-produit'],{ state:produit })
  }

  }

