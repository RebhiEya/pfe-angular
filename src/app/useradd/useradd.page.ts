import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importez AlertController
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez FormBuilder et FormGroup

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddComponent implements OnInit {

  user: User = {
    idUser: 0,
    username:'',
    firstName: '',
    lastName: '',
    matricule: '',
    password: '',
    email: '',
  };

  userForm: FormGroup;


  constructor(
    private dataService: UserService,
    private router: Router,
    private alertController: AlertController ,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      matricule: [''],
      password: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

   ajouterUser() {
      this.dataService.createUser(this.user).subscribe((data) => {
        this.router.navigate(['/user']);
        },
      );

    }

  }

