import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router,private storageService: StorageService) {}

  async ngOnInit() {
    // Récupérez le jeton depuis le stockage
    const accessToken = await this.storageService.get('accessToken');
    console.log('Access Token:', accessToken);
  }
  logout() {
    // Rediriger vers la page tab2
    this.router.navigate(['/tab2']);
  }
}
