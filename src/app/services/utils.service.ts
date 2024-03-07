import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public urlRoot: string = 'https://timserver.northeurope.cloudapp.azure.com/QalitasWebApi';
  accessToken:any;

  constructor(private http: HttpClient, private storageService: StorageService) {}

  getHeaders(){
    // Récupérez l'accessToken depuis le stockage
    // Créez les en-têtes avec l'accessToken récupéré
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${this.accessToken}`
    });
console.log(this.accessToken);
    return headers;
  }

}
