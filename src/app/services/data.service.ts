import { Injectable } from '@angular/core';
import { Audit } from '../models/audit.model';
import { Produit } from '../models/produit.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  urlRoot ="";

  constructor(private httpClient: HttpClient) {}

  createControl(audit: Audit): Observable<object> {
    console.log( audit);
    return this.httpClient.post(this.urlRoot , audit ) ;
  }

  createproduit(produit: Produit): Observable<object> {
    console.log( produit);
    return this.httpClient.post(this.urlRoot , produit ) ;
  }

  async getAllControls() {
    return this.httpClient.get<any[]>(`${this.urlRoot}/api/QualityControls`);

    }

}




