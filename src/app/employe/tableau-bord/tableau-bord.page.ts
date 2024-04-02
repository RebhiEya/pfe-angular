import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.page.html',
  styleUrls: ['./tableau-bord.page.scss'],
})
export class TableauBordPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  goToMenuPage() {
    this.navCtrl.navigateForward('/menu');
  }
}
