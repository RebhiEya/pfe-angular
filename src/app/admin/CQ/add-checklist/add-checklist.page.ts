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
      private router: Router) { }

      ionViewWillEnter() {
        this.selectedProduit = this.productService.getProduct();

        console.log("hh",this.selectedProduit)

      }

       ajouterchecklist() {
         this.dataService.createchecklist(this.selectedProduit.idProduit,this.controlCheckList).subscribe(data =>{
          console.log(data);
          this.router.navigate(['/checklist'])
         },
        (error) => {
          console.error(error);
           // Handle error, show error message, etc.
         }
       );
         }



}
