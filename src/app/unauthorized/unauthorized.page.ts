import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.page.html',
  styleUrls: ['./unauthorized.page.scss'],
})
export class UnauthorizedPage {

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/tabbord']);
  }
}
