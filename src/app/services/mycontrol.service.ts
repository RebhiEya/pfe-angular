import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycontrolService {
  urlRoot='http://localhost:8089/qualiyControl'
  constructor(private httpClient : HttpClient) { }


  getAllcontrol(){
      return this.httpClient.get<any[]>(`${this.urlRoot}/getAll`);
      }

      getControlByIdUser(id: any){
        return this.httpClient.get<any[]>(`${this.urlRoot}/getUserControls/${id}`);
        }

  getControlById(id: any){
    return this.httpClient.get<any>(`${this.urlRoot}/${id}`,);

  }

  all_qualiyControl(){
    return this.httpClient.get<any[]>(`http://localhost:8089/qualiyControl/retrieve-all-qualiyControl`);

  }


  deleteCQ(id: any): Observable<string> {
    return this.httpClient.delete(`http://localhost:8089/qualiyControl/delete/${id}`, { responseType: 'text' });
  }


}
