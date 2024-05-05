import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.page.html',
  styleUrls: ['./tableau-bord.page.scss'],
})
export class TableauBordPage implements OnInit {

  constructor(private navCtrl: NavController , private authService: AuthService) { }

  ngOnInit() {
  }


  goToMenuPage() {
    this.navCtrl.navigateForward('/menu');
  }

  logout(){
    this.authService.Logout()
  }

}
