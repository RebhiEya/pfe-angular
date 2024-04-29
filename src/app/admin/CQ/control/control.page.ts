import { Component, OnInit } from '@angular/core';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage  {
  data: any;


  constructor(private mycontrolService: MycontrolService ,
    private router: Router ,
    private toastController: ToastController, private authService : AuthService,
    private route: ActivatedRoute) { }

    ionViewWillEnter() {
      this.loadData();

      console.log("user" , this.authService.getCurrentUser())
    }

    loadData() {
      this.mycontrolService.all_qualiyControl().subscribe((data) => {
        this.data = data;
        console.log(this.data);
    });
  }


  delete(id: any) {
    this.mycontrolService.deleteCQ(id).subscribe(
      () => {
        this.loadData();
        this.presentToast('Control deleted successfully');
      },
      (error) => {
        console.error('HTTP Error:', error);
        this.presentToast('Error deleting control');
      }
    );
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

}
