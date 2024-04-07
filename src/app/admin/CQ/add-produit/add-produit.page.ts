import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage implements OnInit {

  nouveauProduit = {
    nom: '',
    prix: null,
    description: ''
  };
  constructor() { }

  ngOnInit() {
  }
  ajouterProduit() {
    // Ici vous pouvez ajouter la logique pour enregistrer le produit
    console.log('Nouveau produit :', this.nouveauProduit);
    // Réinitialiser le formulaire après l'ajout
    this.nouveauProduit = {
      nom: '',
      prix: null,
      description: ''
    };
  }
}
