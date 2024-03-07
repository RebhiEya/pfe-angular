// authentification.service.ts
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
export class AuthenticationService {
  private apiUrl = 'https://timserver.northeurope.cloudapp.azure.com/QalitasWebApi';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    public utils: UtilsService,
    private router: Router
  ) {}

  async authenticate(username: string, password: string): Promise<any> {
    const data = `grant_type=password&username=${username}&password=${password}&siteId=39d00cd5-32af-c531-d230-e935a535103e
    &companyId=39d00cd5-3251-9b25-bca0-bf46aa71c52b`;

    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' });

    const source$ = this.http.post<AuthResponse>(`${this.apiUrl}/token`, data, { headers: reqHeader }).pipe();

    try {
      const result = await lastValueFrom(source$);
      await this.storageService.set('accessToken', result.access_token);
      this.router.navigate(['/page3']);
      return result;
    } catch (error) {
      console.error('Erreur lors de l\'authentification :', error);
      throw error;
    }
  }

  async checkIfLoggedIn(): Promise<void> {
    this.utils.accessToken = await this.storageService.get('accessToken');
    if (this.utils.accessToken) {
      this.router.navigate(['/page3']);
    }
  }
  async checkIfUrlExists(): Promise<void> {
    const storedUrl = await this.storageService.get('apiUrl');
    if (storedUrl) {
      this.router.navigateByUrl(`/tab2/${this.apiUrl}`);
    }
  }
}
