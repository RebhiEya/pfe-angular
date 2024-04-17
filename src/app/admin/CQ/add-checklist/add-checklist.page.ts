import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Produit } from 'src/app/models/produit.model';


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
    conformity: false,
    defects: '',
    measures: 0,
    description: ''
    }

    selectedProduit: any[] = [];

    constructor(private checklistService: ChecklistService,
      private dataService:DataService,
      private router: Router) { }

      // ajouterchecklist() {
      //   this.dataService.createchecklist(this.selectedProduit,this.controlCheckList).subscribe(data =>{
      //     console.log(data);
      //     this.router.navigate(['/produits'])
      //   },
      //   (error) => {
      //     console.error(error);
      //     // Handle error, show error message, etc.
      //   }
      // );
      //   }
      ajouterchecklist() {
        // Vérifiez si un produit est sélectionné
        if (this.selectedProduit.length > 0) {
          const selectedProductId = this.selectedProduit[0].idProduit; // Supposons que c'est le bon ID
          this.dataService.createchecklist(selectedProductId, this.controlCheckList).subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/produits']);
            },
            (error) => {
              console.error(error);
              // Gérer l'erreur, afficher un message d'erreur, etc.
            }
          );
        } else {
          console.error("Aucun produit sélectionné.");
          // Afficher un message ou gérer l'absence de produit sélectionné
        }
      }


}
