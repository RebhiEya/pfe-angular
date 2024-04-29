// auth.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Inject('LOCALSTORAGE') protected localStorage: Storage;

  constructor(private http: HttpClient) {
   this.localStorage = localStorage
  }


login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`http://localhost:8089/auth/signin`, credentials)
      .pipe(
        catchError(error => {
          console.error('Error during login:', error);
          return throwError(error);
        })
      );
  }


  logout(): void {
          this.localStorage.removeItem('currentUser');
      }

      getCurrentUser(): any {

          return JSON.parse(this.localStorage.getItem('currentUser')!);
      }
}
