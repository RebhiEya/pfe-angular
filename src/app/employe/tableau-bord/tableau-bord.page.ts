import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.page.html',
  styleUrls: ['./tableau-bord.page.scss'],
})
export class TableauBordPage implements OnInit {
name : string;
  constructor(private navCtrl: NavController , private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    // Assuming currentUser contains role information
    this.name = currentUser.name
  }


  goToMenuPage() {
    this.navCtrl.navigateForward('/menu');
  }

  logout(){
    this.authService.Logout()
  }

}
