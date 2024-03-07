import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthenticationService } from '../services/authenication.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  value: any = "";


  constructor(private storageService: StorageService, private router: Router,     private authService: AuthenticationService
    ) {}


  async setValue() {
   await this.storageService.set('name', 'https://timserver.northeurope.cloudapp.azure.com/QalitasWebApi');
    this.router.navigate(['/tab2']); // Rediriger vers la page3 après avoir défini la valeur
  }

  async getValue() {
  this.value = await this.storageService.get('name');
  }
}
