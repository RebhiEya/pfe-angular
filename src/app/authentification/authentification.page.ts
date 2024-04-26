
// authentification.page.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage {
  credentials = { email: '', password: '' };
  error: string = '';

  constructor(private authService: AuthService, private router: Router ,) {}

  onLogin() {
    this.authService.login(this.credentials)
      .subscribe(response => {
          localStorage.setItem('loginToken', response.token);
          localStorage.setItem('role', response.role);
          switch(response.role) {
            case 'admin':
              this.router.navigate(['/tabbord']);
              break;
            case 'employe':
              this.router.navigate(['/tableau-bord']);
              break;
            default:
              this.router.navigate(['tabbord']);
              break;
          }
      }
     );
  }
}
