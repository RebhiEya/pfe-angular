import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycontrolService {
  urlRoot=''
  constructor(private httpClient : HttpClient) { }


  getAllcontrol(){
      return this.httpClient.get<any[]>(`${this.urlRoot}/getAll`);
      }
  }

