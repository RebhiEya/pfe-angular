import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddComponent implements OnInit {

  userForm: FormGroup;
  user: User = { // Déclarez la propriété user ici
    idUser: 0,
    username:'',
    firstName: '',
    lastName: '',
    matricule: '',
    password: '',
    email: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private dataService: UserService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      matricule: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  ajouterUser() {
    if (this.userForm.valid) {
      const userData: User = this.userForm.value;
      this.dataService.createUser(userData).subscribe(
        () => {
          this.router.navigate(['/user']);
        },
        (error) => {
          console.error('Une erreur est survenue lors de l\'ajout de l\'utilisateur : ', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide. Veuillez vérifier les champs.');
    }
  }
}
