import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.page.html',
  styleUrls: ['./add-control.page.scss'],
})
export class AddControlPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }



  ajouter() {
    // Logique à exécuter lorsque le bouton "Ajouter" est cliqué
    console.log('Bouton "Ajouter" cliqué');
  }
}
