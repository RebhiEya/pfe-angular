import { Component, OnInit } from '@angular/core';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage  {
  data: any;
  searchDate: string;


  constructor(private mycontrolService: MycontrolService ,
    private datePipe: DatePipe,
     private authService : AuthService,
    private alertController: AlertController
  ) { }

    ionViewWillEnter() {
      this.loadData();
      console.log("user" , this.authService.getCurrentUser())
    }

    loadData() {
      this.mycontrolService.all_qualiyControl().subscribe((data: any[]) => {
        this.data = data.map((item: any) => ({
          ...item,
          date: this.datePipe.transform(item.date, 'yyyy-MM-dd')
        }));

        // Filter data by selected date
        if (this.searchDate) {
          this.data = this.data.filter((item: any) => item.date === this.searchDate);
        }
      });
    }

    sortByDate() {
      // Tri des éléments par date
      this.data.sort((a: any, b: any) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    }

    sortOldDatesFirst() {
      // Tri des éléments pour afficher les anciennes dates en premier
      this.data.sort((a: any, b: any) => {
        return <any>new Date(a.date) - <any>new Date(b.date);
      });
    }



  async delete(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // L'utilisateur a cliqué sur Annuler, ne rien faire
          }
        }, {
          text: 'OK',
          handler: () => {
    this.mycontrolService.deleteCQ(id).subscribe(
      () => {
        this.loadData();
      });
    }}]
  });
  await alert.present();

  }

  // async presentToast(message: string) {
  //   const toast = await this.toastController.create({
  //     message: message,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  // delete(id : any){
  //   this.mycontrolService.deleteCQ(id).subscribe((data)=> {
  //     this.data = data
  //     });
  // }

  logout(){
    this.authService.Logout()
  }

}
