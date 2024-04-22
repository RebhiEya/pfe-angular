
// authentification.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage {
  loginObj: { email: string, password: string } = { email: '', password: '' };
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginObj.email, this.loginObj.password)
      .subscribe((res: any) => {
        console.log("Réponse du serveur :", res); 
        if (res.result) {
          alert('Login successful');
          localStorage.setItem('loginToken', res.token);
          this.router.navigateByUrl('./employe/tableau-bord');
        } else {
          this.error = res.message;
        }
      }, (error: any) => { // Définissez le type d'erreur explicitement
        this.error = 'An error occurred while logging in. Please try again later.';
      });
  }
}
