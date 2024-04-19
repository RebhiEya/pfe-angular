import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserComponent implements OnInit {
  data: any;
  userss: User [] = [];
  auditId: number = 0;
  item :any;


  users: User[] = [];
  selectedUser: User | null = null;
  newUser: User = { idUser: 0, firstName: '', LastName: '', matricule: '', password: '', email: '' };

  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
  
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { idUser: 0, firstName: '', LastName: '', matricule: '', password: '', email: '' }; // Clear the form
    });
  }

  update(item: any): void {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser.idUser, this.selectedUser).subscribe(() => {
        this.loadUsers();
        this.selectedUser = null; // Clear the selected user
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
  redirectToChecklistProcessPage(): void {
    // Implémentez la logique pour la redirection ici
  }
}





 

