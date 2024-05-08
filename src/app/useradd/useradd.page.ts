import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importez AlertController
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Importez FormBuilder et FormGroup

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
  hero: any;
  heroForm: FormGroup<{ name: FormControl<any>; alterEgo: FormControl<any>; power: FormControl<any>; }>;


  constructor(
    private dataService: UserService,
    private router: Router,
    private alertController: AlertController ,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required),
    });
  }
  

   ajouterUser() {
      this.dataService.createUser(this.user).subscribe((data) => {
        this.router.navigate(['/user']);
        },
      );

    }

  }

function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

