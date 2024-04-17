import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { Produit } from 'src/app/models/produit.model';
import { ChecklistService } from 'src/app/services/checklist.service';


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
  selectedChecklists: ControlCheckList[] = [];
  constructor(private router: Router , private productService: DataService , private checklistService : ChecklistService) { }


    ionViewWillEnter() {
      this.selectedProduit = this.productService.getProduct();
      this.productService.getChecklistByProduit(this.selectedProduit.idProduit).subscribe((data) =>{
       this.controlCheckList = data
       console.log(data)
      }

      )
      //console.log(this.checklistService.getChecklist)
    }
    toggleSelection(checklist: ControlCheckList) {
      const index = this.selectedChecklists.findIndex(item => item.idControlCheckList === checklist.idControlCheckList);
      if (index !== -1) {
        this.selectedChecklists.splice(index, 1); // Deselect if already selected

      } else {
        this.selectedChecklists.push(checklist); // Select if not already selected

      }
    }

    isSelected(checklist: ControlCheckList): boolean {
      this.selectedChecklists = this.checklistService.getChecklist(); // Get selected checklists from service
      return this.selectedChecklists.some(item => item.idControlCheckList === checklist.idControlCheckList);
    }

    saveSelectedChecklists() {
      // Save the selected checklists to the ControlService for the new Control
      console.log(this.selectedChecklists)
      this.checklistService.setChecklist(this.selectedChecklists);


       this.router.navigate(['/add-control'] );
    }
    isItemCompleted(item: any): boolean {
      return item.completed || false; // Return true if completed, false if not set
    }



}
