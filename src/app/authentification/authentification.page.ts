import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor( private router: Router ,
     ) {}

  username: string = '';
  password: string = '';

  ngOnInit() {}

  
  async setItem(){
   this.router.navigate(['/tableau-bord']);
  //C:\Nouveau dossier (2)\myFirst\src\app\employe\tableau-bord
  }

}
