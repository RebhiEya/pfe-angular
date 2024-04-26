import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlRoot  ="http://localhost:8089";


  constructor(private httpClient: HttpClient) { }


private user : User ={
      idUser:0,
      firstName: '',
      lastName: '',
      matricule: '',
      password: '',
      email:'',
      roles: []

 };


 //user
 getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.urlRoot}/user/getAll`);
  }

  createUser(user: User): Observable<object> {
    console.log(user)
    return this.httpClient.post(`${this.urlRoot}/user/add`, user ) ;
    }


  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.urlRoot}/user/delete/${id}`);
  }


//equipe
getAllPequipe() {
  return this.httpClient.get<any[]>(`${this.urlRoot}/getAll`);
  }
  setUser(user: any) {
    this.user = user;
  }

}
