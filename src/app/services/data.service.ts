import { Injectable } from '@angular/core';
import { Audit } from '../models/audit.model';
import { Produit } from '../models/produit.model';
import { ControlCheckList } from '../models/ControlCheckList.model';
import { Observable ,lastValueFrom} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { auditProcesses} from 'src/app/models/processus.model';
import { ProcessChecklist } from 'src/app/models/ProcessChecklist.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  urlRoot ="http://localhost:8089/produit";

  constructor(private httpClient: HttpClient) {}
  private product: Produit = {
    idProduit:0,
    category: '',
    designation: '',
    reference: '',
    famille:''

  };

  setProduct(product: any) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }

  createControl(audit: Audit): Observable<object> {
    console.log( audit);
    return this.httpClient.post(  this.urlRoot , audit ) ;
  }
  getAllProduit() {
    return this.httpClient.get<any[]>(`${this.urlRoot}/getAll`);
    }

  getChecklistByProduit(id: any) {
    return this.httpClient.get<any[]>(`http://localhost:8089/controlCheckList/getByIdProduit/${id}`);
      }


  createproduit(produit: Produit): Observable<object> {
    return this.httpClient.post( `${this.urlRoot}/add` , produit ) ;
  }


  updateProduit(id: any,item: any): Observable<any>{
      return this.httpClient.put<any>(`${this.urlRoot}/update/${id}`, item );
    }

  deleteProduit(id: any): Observable<any> {
      return this.httpClient.delete<any>(`${this.urlRoot}/delete/${id}`);
    }

    createchecklist(id : any ,controlCheckList: any): Observable<object> {
      console.log( controlCheckList);
      return this.httpClient.post(`http://localhost:8089/produit/assign-checklist-to-produit/${id}` , controlCheckList ) ;
    }
  }




