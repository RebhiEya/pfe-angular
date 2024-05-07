import { Component, OnInit } from '@angular/core';
import { MycontrolService } from 'src/app/services/mycontrol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage  {
  data: any;
  searchTerm: string ;


  constructor(private mycontrolService: MycontrolService ,
    private router: Router ,
    private datePipe: DatePipe,
    private toastController: ToastController,
     private authService : AuthService,
    private route: ActivatedRoute) { }

    ionViewWillEnter() {
      this.loadData();
      console.log("user" , this.authService.getCurrentUser())
    }

    loadData() {
      this.mycontrolService.all_qualiyControl().subscribe((data) => {
        this.data = data.map(item => ({
          ...item,
          date: this.datePipe.transform(item.date, 'yyyy-MM-dd')
        }));        console.log(this.data);
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

  logout(){
    this.authService.Logout()
  }

}
