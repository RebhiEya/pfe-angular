import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabbord',
  templateUrl: './tabbord.page.html',
  styleUrls: ['./tabbord.page.scss'],
})
export class TabbordPage implements OnInit {

  constructor( private authService : AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.Logout()
  }

}


