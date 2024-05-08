import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-les-audits',
  templateUrl: './les-audits.page.html',
  styleUrls: ['./les-audits.page.scss'],
})
export class LesAuditsPage  {

  data: any;


  constructor(private AuditprocessesService: AuditprocessesService ,
    private router: Router ,
    private toastController: ToastController, private authService : AuthService,
    private route: ActivatedRoute , private datePipe: DatePipe,
    private alertController: AlertController
  ) { }

    ionViewWillEnter() {
      this.loadData();

      console.log("user" , this.authService.getCurrentUser())
    }

    loadData() {
      this.AuditprocessesService.all_qualiyControl().subscribe((data) => {
        this.data = data.map(item => ({
          ...item,
          date: this.datePipe.transform(item.date, 'yyyy-MM-dd')
        }));        console.log(this.data);
    });
  }


  async delete(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir supprimer cet audit ?',
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
     this.AuditprocessesService.deleteCQ(id).subscribe(
       () => {
         this.loadData();
        });
      }
    }
  ]
});

await alert.present();
}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



  // delete(id : any){
  //   this.mycontrolService.deleteCQ(id).subscribe((data)=> {
  //     this.data = data
  //     });
  // }
  logout(){
    this.authService.Logout()
  }
}
