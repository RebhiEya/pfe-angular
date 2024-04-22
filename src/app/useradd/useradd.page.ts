import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddComponent implements OnInit {

  user: User = {
    idUser: 0,
    firstName: '',
    lastName: '',
    matricule: '',
    password: '',
    email: '',
    roles: [] 
  };

  constructor(private dataService: UserService, private router: Router) { }

  ngOnInit() {
  }

  ajouterUser() {
    this.dataService.createUser(this.user).subscribe(
      () => {
        this.router.navigate(['/user']);
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }
  
  
}
