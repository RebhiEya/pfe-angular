import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-updat-produit',
  templateUrl: './updat-produit.page.html',
  styleUrls: ['./updat-produit.page.scss'],
})
export class UpdatProduitPage implements OnInit {
  controlId: string = '';
  produit : any ;

  constructor(private dataService: DataService ,
    private router: Router ,
    private toastController: ToastController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const recivedData = this.router.getCurrentNavigation()?.extras.state;
    if(recivedData){
      this.produit = recivedData
    }


  }

   update(){
     this.dataService.updateProduit(this.produit.idProduit,this.produit).subscribe(
      ()=>this.router.navigate(['/produits']),
);


    const toast =  this.toastController.create({
      message: 'produit updated successfully',
      duration: 3000,
      position: 'top',
      cssClass: 'custom-toast'//Utiliser la classe CSS personnalisée
    });



  }

}
