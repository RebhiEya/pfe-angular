import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserComponent {
  data: any;
  searchTerm: string ;

  constructor(private adminService: AdminService , private authService : AuthService) {}

  ionViewWillEnter(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.adminService.getAllUsers().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  deleteUser(id: any): void {
    this.adminService.deleteUser(id).subscribe((data) => {
      this.loadUsers();
    });
  }
  logout(){
    this.authService.Logout()
  }
}
