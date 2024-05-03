import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-equipe-audit',
  templateUrl: './equipe-audit.page.html',
  styleUrls: ['./equipe-audit.page.scss'],
})
export class EquipeAuditPage  {
  data: any;
  item :any;

  constructor(private adminService: AdminService ,
    private router: Router ,) { }

    ionViewWillEnter() {
      this.loadUsers();
      }

      loadUsers(): void {
        this.adminService.getAllUsers().subscribe((data) => {
          this.data = data;
          console.log(this.data);
        });
      }


    selectProcess(userId : any){
      this.adminService.setUser(userId);
      this.router.navigate(['/add-audit'])
    }

}



  
