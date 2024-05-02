import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  styleUrls: ['./equipe.page.scss'],
})
export class EquipePage  {

  data: any;
  item :any;


  selectedEquipe: User[] = [];

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


    selectUser(userId : any){
      this.adminService.setUser(userId);
      this.router.navigate(['/add-control'])
    }

    isSelected(users: User): boolean {
      this.selectedEquipe = this.adminService.getChecklist();
      return this.selectedEquipe.some(item => item.idUser === users.idUser);
    }

}
