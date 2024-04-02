import { Injectable } from '@angular/core';
import { audit } from '../models/audit.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  urlRoot ="";

  constructor(private httpClient: HttpClient) {}

  createControl(audit: audit): Observable<object> {
  //  console.log( item);
    return this.httpClient.post(this.urlRoot , audit ) ;
  }

}




