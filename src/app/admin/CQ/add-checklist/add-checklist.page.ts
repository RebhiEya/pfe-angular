import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Produit } from 'src/app/models/produit.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.page.html',
  styleUrls: ['./add-checklist.page.scss'],
})
export class AddChecklistPage  {

  controlCheckList : ControlCheckList = {
    idControlCheckList:0,
    category: '',
    criteria: '',
    operation: '',
    conformity:null ,
    defects: '',
    measures: 0,
    description: ''
    }



    selectedProduit: Produit = {
      idProduit:0,
      category: '',
      designation: '',
      reference: '',
      famille:''

    };

    constructor(private checklistService: ChecklistService,
      private dataService:DataService,private productService: DataService,
      private router: Router,private alertController: AlertController) { }

      ionViewWillEnter() {
        this.selectedProduit = this.productService.getProduct();
        console.log("hh",this.selectedProduit)

      }
      

      async ajouterchecklist() {
        if (this.validateForm()) {
          this.dataService.createchecklist(this.selectedProduit.idProduit, this.controlCheckList).subscribe(data => {
            console.log(data);
            this.presentSuccessAlert();
            this.router.navigate(['/checklist']);
          }, error => {
            console.error(error);
            this.presentErrorAlert();
          });
        } else {
          this.presentErrorAlert();
        }
      }

      validateForm(): boolean {
        const measuresNumber = Number(this.controlCheckList.measures);
        // Vérifie si tous les champs sont remplis et si le champ 'measures' est un nombre
        return (
          this.controlCheckList.category !== '' &&
          this.controlCheckList.criteria !== '' &&
          this.controlCheckList.operation !== '' &&
          this.controlCheckList.description !== ''
          // &&
         // !isNaN(measuresNumber)
        );
      }

      async presentSuccessAlert() {
        const alert = await this.alertController.create({
          header: 'Succès',
          message: 'La checklist a été ajoutée avec succès.',
          buttons: ['OK'],
          cssClass: 'success-alert'
        });
        await alert.present();
      }

      async presentErrorAlert() {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Veuillez remplir correctement tous les champs du formulaire.',
          buttons: ['OK'],
          cssClass: 'error-alert'
        });
        await alert.present();
      }

    }


