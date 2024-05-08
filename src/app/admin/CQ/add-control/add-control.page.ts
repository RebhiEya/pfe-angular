import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';
import { Produit } from 'src/app/models/produit.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { DataService } from 'src/app/services/data.service';
import { Qualitycontrol } from 'src/app/models/Qualitycontrol.model';
import { AdminService } from 'src/app/services/admin.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { Inject } from '@angular/core';


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
  constructor(  private router: Router ,
     private productService: DataService,
     private adminService: AdminService,
     private checklistService : ChecklistService ,
     private alertController: AlertController,
     @Inject(MenuController) private menuController: MenuController,
         private authService : AuthService) { }

  ionViewWillEnter() {
    this.selectedProduit = this.productService.getProduct();
    this.selectedUser = this.adminService.getUser();
    this.selectedChecklists = this.checklistService.getChecklist();
    console.log("hh",this.selectedProduit)

  }

  getChecklist(){
    this.router.navigate(['/checklist'])
  }

  async ajouter() {
    if (this.validateForm()) {
      const selectedChecklistIds = this.selectedChecklists.map(item => item.idControlCheckList);
      this.checklistService.createControl(this.control, this.selectedUser, this.selectedProduit.idProduit, selectedChecklistIds)
        .subscribe(
          data => {
            this.control = {
              idQualityControl: 0,
              reference: '',
              internalReference: '',
              date: new Date(),
              state: '',
              description: '',
            };
            this.presentSuccessAlert();
            this.router.navigate(['/control']);
          },
          error => {
            console.error('Error creating control:', error);
            this.presentErrorAlert('Une erreur est survenue lors de la création du contrôle.');
          }
        );
    } else {
      this.presentErrorAlert('Veuillez remplir tous les champs.');
    }
  }

  validateForm(): boolean {
    // Vérifie si les champs de Qualitycontrol ne sont pas vides
    return (
      this.control.reference.trim() !== '' &&
      this.control.internalReference.trim() !== '' &&
      this.control.state.trim() !== '' &&
      this.control.description.trim() !== ''
    );
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Le contrôle a été ajouté avec succès.',
      buttons: ['OK'],
      cssClass: 'success-alert'
    });
    await alert.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: message,
      buttons: ['OK'],
      cssClass: 'error-alert'
    });
    await alert.present();
  }

  async openFirstMenu() {
    await this.menuController.open('main-content');
  }

  logout(){
    this.authService.Logout()
  }
}

