import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserComponent {
  data: any;
  item :any;


  constructor(private adminService : AdminService,
    private router: Router,
    private route: ActivatedRoute,) {}

    ionViewWillEnter(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getAllUsers().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

   deleteUser(id: any) {
     this.adminService.deleteUser(id).subscribe((data) => {
      this.data = data
     });
   }



}







