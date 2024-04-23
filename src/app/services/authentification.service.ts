import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { AuthResponse } from './response.interface';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:8089'
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    public utils: UtilsService,
    private router: Router
  ) {}

  async authenticate(username: string, password: string): Promise<any> {
    const data = `grant_type=password&username=${username}&password=${password}&siteId=39d00cd5-32af-c531-d230-e935a535103e`;

    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' });

    const source$ = this.http.post<AuthResponse>(`${this.apiUrl}/token`, data, { headers: reqHeader }).pipe();

    try {
      const result = await lastValueFrom(source$);
      await this.storageService.set('accessToken', result.access_token);
      this.router.navigate(['/au']);
      return result;
    } catch (error) {
      console.error('Erreur lors de l\'authentification :', error);
      throw error;
    }
  }


}

