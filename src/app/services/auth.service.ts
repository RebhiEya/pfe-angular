// auth.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Inject('LOCALSTORAGE') protected localStorage: Storage;

  constructor(private http: HttpClient , private router : Router) {
  this.localStorage = localStorage
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:8089/auth/signin`, {
      email,
      password
    }, httpOptions);
  }

  Logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/authentification'])
  }
      getCurrentUser(): any {
          return JSON.parse(this.localStorage.getItem('currentUser')!);
      }
}
