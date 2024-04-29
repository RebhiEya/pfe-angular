
// authentification.page.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage {
  credentials = { email: '', password: '' };
  error: string = '';
  isAdmin: boolean;
  isEmployee: boolean;

  constructor(private authService: AuthService, private router: Router ,) {}

  onLogin() {
    this.authService.login(this.credentials)
      .subscribe(response => {

          if (response.role[0] === "ADMIN"){
              this.isAdmin=true
          }else if (response.role[0]==="EMPLOYEE"){
              this.isEmployee=true
          }
        console.log("auth",response)
        localStorage.setItem('currentUser', JSON.stringify({
          loginToken: response.token,
          role: response.role[0],
          idUser:response.idUser,
          isEmployee : this.isEmployee,
          isAdmin:this.isAdmin,
          name:response.name,
          expiration: moment().add(1,'days').toDate()
        }))

          switch(response.role[0]) {
            case 'ADMIN':
              this.router.navigate(['/tabbord']);
              break;
            case 'EMPLOYEE':
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
