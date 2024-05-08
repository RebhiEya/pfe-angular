
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
    this.authService.login(this.credentials.email , this.credentials.password)
      .subscribe(response => {

          if (response.roles[0] === "ADMIN"){
              this.isAdmin=true
          }else if (response.roles[0]==="EMPLOYEE"){
              this.isEmployee=true
          }
        console.log("auth",response)
        localStorage.setItem('currentUser', JSON.stringify({
          loginToken: response.jwt,
          roles: response.roles[0],
          idUser:response.id,
          name:response.firstName,
          isEmployee : this.isEmployee,
          isAdmin:this.isAdmin,
          expiration: moment().add(1,'days').toDate()
        }))

          switch(response.roles[0]) {
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
