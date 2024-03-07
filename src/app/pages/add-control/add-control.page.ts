import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-add-control',
  templateUrl: './add-control.page.html',
  styleUrls: ['./add-control.page.scss'],
})
export class AddControlPage implements OnInit {
  @ViewChild('dateInput', { static: true }) dateInput!: IonInput;

  constructor(private router: Router) { }

  navigateToResults() {
    // Naviguer vers la page des résultats
    this.router.navigate(['/results']); // Assurez-vous de remplacer '/results' par le chemin de votre page de résultats
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Appel de la fonction pour afficher la date actuelle dans le champ de date lors de l'entrée dans la vue
    this.setCurrentDate();
  }

  setCurrentDate() {
    // Création d'une nouvelle date
    const currentDate = new Date();
    // Formatage de la date pour l'input type date
    const formattedDate = currentDate.toISOString().split('T')[0];
    // Attribution de la date formatée à la valeur de l'élément input
    this.dateInput.value = formattedDate;
  }
}
