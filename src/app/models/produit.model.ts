
export class Produit {
  idProduit : number;
  category: string;
  designation: string;
  reference: string;
  famille: string;

  constructor(category: string, designation: string,  reference: string, famille: string,) {
    this.category = category;
    this.designation = designation;
    this.reference = reference;
    this.famille = famille;
  }
}
