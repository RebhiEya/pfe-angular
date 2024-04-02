import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addchecklistprocess',
  templateUrl: './addchecklistprocess.page.html',
  styleUrls: ['./addchecklistprocess.page.scss'],
})
export class AddchecklistprocessPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeDialog() {
    this.modalController.dismiss();
  }
}
