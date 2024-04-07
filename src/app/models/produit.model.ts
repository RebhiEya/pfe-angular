
export class Produit {
  category: string;
  designation: string;
  reference: string;
  Famille: string;

  constructor(category: string, designation: string,  reference: string, Famille: string,) {
    this.category = category;
    this.designation = designation;
    this.reference = reference;
    this.Famille = Famille;
  }
}
