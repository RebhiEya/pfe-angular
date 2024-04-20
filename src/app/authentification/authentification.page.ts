import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')
      ])),
    });
  }

  async setItem() {
    if (this.loginForm.valid) {
      this.router.navigate(['/tableau-bord']);
    }
  }
}
