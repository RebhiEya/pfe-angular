import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';
import Guid from "devextreme/core/guid";
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  companyId: Guid = new Guid();
  siteId: Guid = new Guid();
  id: Guid = new Guid();
  reference: string = '';
  internalReference: string = '';
  batchNumber: string = '';
  sampleNumber: string = '';
  productId: Guid = new Guid();
  productFullDesignation: string = '';
  productFamilyId: Guid = new Guid();
  productFamilyFullDesignation: string = '';
  nature: number = 0;
  date: Date = new Date();
  state: number = 0;
  stateStr: string = '';
  realizationDate: Date = new Date();
  duration: number = 0;
  durationTime: Date = new Date();
  qtyProduced: number = 0;
  qtyControlled: number = 0;
  qtyNc: number = 0;
  qtyRejected: number = 0;
  qtyRetouched: number = 0;
  qtyDeclassed: number = 0;
  qtyDerogated: number = 0;
  description: string = '';
  controlPlace: string = '';
  invoiceNumber: string = '';
  shippingDate: Date = new Date();
  orderNumber: string = '';
  customerId: Guid = new Guid();
  customerCode: string = '';
  customerDesignation: string = '';
  customerFullDesignation: string = '';
  indirectCustomerId: Guid = new Guid();
  indirectCustomerCode: string = '';
  indirectCustomerDesignation: string = '';
  indirectCustomerFullDesignation: string = '';





  constructor(public utils: UtilsService,
    private storageService: StorageService,
    private http: HttpClient) {}


    private async setHeaders() {
      this.utils.accessToken = await this.storageService.get('accessToken');
      return new HttpHeaders({
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${this.utils.accessToken}`
      });
    }

  async getAllControls() {
  const headers = await this.setHeaders();
  console.log(this.utils.accessToken);
    var result = this.http.get<any[]>(`${this.utils.urlRoot}/api/QualityControls`, { headers });
    return lastValueFrom(result);
  }

  async getCheckListByControl(id: any ){
    const headers = await this.setHeaders();
    console.log(id);
    var result = this.http.get<any[]>(`${this.utils.urlRoot}/api/QualityControls/${id}/checklist`, { headers });
    return lastValueFrom(result);
  }

  async getDefectsByControl(id: any) {
    const headers = await this.setHeaders();
    console.log(id);
    var result = this.http.get<any[]>(`${this.utils.urlRoot}/api/QualityControls/${id}/defects`, { headers });
    return lastValueFrom(result);
  }

  async deleteControlDefect(id: any){
    const headers = await this.setHeaders();
    console.log(id);
    var result =  this.http.delete<any>(`${this.utils.urlRoot}/api/QualityControls/defects/${id}`,  { headers });
    return lastValueFrom(result);
  }

  //#region Team

  async getTeamByControl(id: any) {
    const headers = await this.setHeaders();
    console.log(id);
    var result = this.http.get<any[]>(`${this.utils.urlRoot}/api/QualityControls/${id}/teams`, { headers });
    return lastValueFrom(result);
  }

  async getControlTeam(id: any) {
    const headers = await this.setHeaders();
    console.log(id);
    var result = this.http.get<any>(`${this.utils.urlRoot}/api/QualityControls/teams/${id}`, { headers });
    return  lastValueFrom(result);
  }



  }
