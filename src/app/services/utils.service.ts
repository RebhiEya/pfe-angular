import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  accessToken:any;

  constructor(private http: HttpClient, private storageService: StorageService) {}

  getHeaders(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${this.accessToken}`
    });
console.log(this.accessToken);
    return headers;
  }

}
