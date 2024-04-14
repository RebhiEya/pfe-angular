import { Injectable } from '@angular/core';
import { Audit } from '../models/audit.model';
import { Produit } from '../models/produit.model';
import { ControlCheckList } from '../models/ControlCheckList.model';
import { Observable ,lastValueFrom} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { auditProcesses} from 'src/app/models/processus.model';
import { ProcessChecklist } from 'src/app/models/ProcessChecklist.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  urlRoot ="http://localhost:8089/produit";
  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}
  private product: Produit = {
    idProduit:0,
    category: '',
    designation: '',
    reference: '',
    famille:''

  };

  setProduct(product: any) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }

  createControl(audit: Audit): Observable<object> {
    console.log( audit);
    return this.httpClient.post(  this.urlRoot , audit ) ;
  }
  getAllProduit() {
    return this.httpClient.get<any[]>(`${this.urlRoot}/getAll`);
    }
    getChecklistByProduit(id: any) {
      return this.httpClient.get<any[]>(`http://localhost:8089/controlCheckList/getByIdProduit/${id}`);
      }
  createproduit(produit: Produit): Observable<object> {

  return this.httpClient.post( `${this.urlRoot}/add` , produit ) ;

  }

  updateProduit(id: any,item: any): Observable<any>{
      return this.httpClient.put<any>(`${this.urlRoot}/update/${id}`, item );

    }
  deleteProduit(id: any): Observable<any> {
      return this.httpClient.delete<any>(`${this.urlRoot}/delete/${id}`);
    }



    createchecklist(controlCheckList: ControlCheckList): Observable<object> {
      console.log( controlCheckList);
      return this.httpClient.post(this.urlRoot , controlCheckList ) ;
    }




    //audit
    addAudit(auditData: any): Observable<any> {
      return this.httpClient.post<any>('http://localhost:8080/audit/add/select-checklist-for-audit/1', auditData);
    }
    
    getAllProcesses(): Observable<auditProcesses[]> {
      return this.httpClient.get<auditProcesses[]>(`${this.baseUrl}/process/getAll`);
    }
    
    // Ajoutez cette méthode pour récupérer les processus liés à un audit spécifique
    getProcessesByAudit(auditId: number): Observable<auditProcesses[]> {
      return this.httpClient.get<auditProcesses[]>(`${this.baseUrl}/audit/${auditId}/processes`);
    }
    
    addProcess(process: auditProcesses): Observable<auditProcesses> {
      return this.httpClient.post<auditProcesses>(`${this.baseUrl}/process/process`, process);
    }
    
    assignChecklistToProcess(processId: number, processChecklist: any): Observable<auditProcesses> {
      return this.httpClient.post<auditProcesses>(`${this.baseUrl}/process/assign-checklist-to-process/${processId}`, processChecklist);
    }
    
    addProcessWithChecklist(process: auditProcesses, checklistId: number): Observable<auditProcesses> {
      return this.httpClient.post<auditProcesses>(`${this.baseUrl}/process/process-with-checklist?checklistId=${checklistId}`, process);
    }
    
    getChecklistsByProcess(processId: number): Observable<ProcessChecklist[]> {
      return this.httpClient.get<ProcessChecklist[]>(`${this.baseUrl}/process/${processId}/checklists`);
    }
  
  }




