import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddchecklistprocessPage } from '../addchecklistprocess/addchecklistprocess.page';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.page.html',
  styleUrls: ['./addprocess.page.scss'],
})
export class AddprocessPage implements OnInit {

  constructor(private modalController: ModalController,
    private router: Router,
    private dataService: DataService
    ) {}

  ngOnInit() {
  }

  async openDialog() {
    const modal = await this.modalController.create({
      component: AddchecklistprocessPage,
      componentProps: {
        // Vous pouvez passer des données à votre boîte de dialogue si nécessaire
        // Par exemple, data: { key: 'value' }
      }
    });
    await modal.present();
  }


}
