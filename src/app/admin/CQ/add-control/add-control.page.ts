import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.page.html',
  styleUrls: ['./add-control.page.scss'],
})
export class AddControlPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ajouter() {
    // Logique à exécuter lorsque le bouton "Ajouter" est cliqué
    console.log('Bouton "Ajouter" cliqué');
  }
}
