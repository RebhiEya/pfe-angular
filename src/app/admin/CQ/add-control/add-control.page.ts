import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { Produit } from 'src/app/models/produit.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { DataService } from 'src/app/services/data.service';
import { Qualitycontrol } from 'src/app/models/Qualitycontrol.model';



@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.page.html',
  styleUrls: ['./add-control.page.scss'],
})
export class AddControlPage  {

   control : Qualitycontrol = {
    idQualityControl: 0,
    reference :'',
    internalReference: '',
    date :new Date(),
    state: '',
    description: '',
   }


  selectedProduit : Produit = {
    idProduit:0,
    category: '',
    designation: '',
    reference: '',
    famille:''

  };
  selectedChecklists: ControlCheckList[] = [];
  constructor(  private router: Router , private productService: DataService,private checklistService : ChecklistService) { }

  ionViewWillEnter() {
    this.selectedProduit = this.productService.getProduct();
    this.selectedChecklists = this.checklistService.getChecklist();
    console.log("hh",this.selectedProduit)

  }

  getChecklist(){
    this.router.navigate(['/checklist'])
  }
  ajouter() {
    const selectedChecklistIds = this.selectedChecklists.map(item => item.idControlCheckList);
this.checklistService.createControl(this.control, this.selectedProduit.idProduit, selectedChecklistIds).subscribe(
  ()=>this.router.navigate(['/tableau-bord']),
 );

  }
}
