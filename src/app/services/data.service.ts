import { Injectable } from '@angular/core';
import { Audit } from '../models/audit.model';
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

}




