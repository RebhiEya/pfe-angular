import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.page.html',
  styleUrls: ['./unauthorize.page.scss'],
})
export class UnauthorizePage  {

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/tableau-bord']); // Assurez-vous d'avoir une route '/dashboard' définie dans votre application
  }

}
