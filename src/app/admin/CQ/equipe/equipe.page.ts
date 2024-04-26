import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  styleUrls: ['./equipe.page.scss'],
})
export class EquipePage  {

  data: any;
  item :any;

  constructor(private adminService: AdminService ,
    private router: Router ,) { }

    ionViewWillEnter() {
      this.loadData();
      }

    loadData() {
      this.adminService.getAllPequipe().subscribe((data) => {
          this.data = data;
          console.log(this.data);
      });
    }

    selectProduit(user : any){
      this.adminService.setUser(user);
      this.router.navigate(['/add-control'])
    }

}
