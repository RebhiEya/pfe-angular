// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`http://localhost:8089/auth/signin`, credentials)
      .pipe(
        catchError(error => {
          console.error('Error during login:', error);
          return throwError(error);
        })
      );
  }

  // logout(): void {
  //   localStorage.removeItem('loginToken');
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('loginToken');
  // }

  // isLoggedIn(): boolean {
  //   return !!this.getToken();
  // }
}
