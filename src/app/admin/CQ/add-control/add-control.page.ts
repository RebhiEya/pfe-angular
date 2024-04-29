import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { Produit } from 'src/app/models/produit.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { DataService } from 'src/app/services/data.service';
import { Qualitycontrol } from 'src/app/models/Qualitycontrol.model';
import { AdminService } from 'src/app/services/admin.service';



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
  selectedUser: any;
  constructor(  private router: Router , private productService: DataService,private adminService: AdminService,private checklistService : ChecklistService) { }

  ionViewWillEnter() {
    this.selectedProduit = this.productService.getProduct();
    this.selectedUser = this.adminService.getUser();
    this.selectedChecklists = this.checklistService.getChecklist();
    console.log("hh",this.selectedProduit)

  }

  getChecklist(){
    this.router.navigate(['/checklist'])
  }
  ajouter() {
    const selectedChecklistIds = this.selectedChecklists.map(item => item.idControlCheckList);
    this.checklistService.createControl(this.control, this.selectedUser, this.selectedProduit.idProduit, selectedChecklistIds).subscribe(data => {
      this.control = {
        idQualityControl: 0,
        reference: '',
        internalReference: '',
        date: new Date(),
        state: '',
        description: '',
      };

      // After successfully creating the control, navigate to the desired route
      this.router.navigate(['/control']); // Corrected line
    }, error => {
      // Handle error if needed
      console.error('Error creating control:', error);
    });
  }

  // this.employeService.updateDefect(id, this.controldefect).subscribe(data => {
  //   this.controldefect = {
  //     idControlDefect : 0,
  //     category : '',
  //     code : '',
  //     quantity: '',
  //     description: ''
  //   }
}
