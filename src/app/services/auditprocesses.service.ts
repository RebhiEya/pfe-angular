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
export class AuditprocessesService {
  baseUrl = 'http://localhost:8089/admin/process';

  constructor(private httpClient: HttpClient) { }

  auditprocesses: auditProcesses = {
    idProcess: 0,
    nom: '',
    recommendation: '',
    strength: '',
    weakness: '',
    checklistScore: 0
  };


    //audit
    addAudit(auditData: any): Observable<any> {
      return this.httpClient.post<any>('http://localhost:8080/audit/add/select-checklist-for-audit/1', auditData);
    }

    getAllProcesses(){
      return this.httpClient.get<any[]>(`${this.baseUrl}/getAll`);
    }


    deleteProsses(id: any): Observable<any> {
      return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
    }

    updateProcess(id: any,item: any): Observable<any>{
      return this.httpClient.put<any>(`${this.baseUrl}/update/${id}`, item );

    }
    
 

    // Ajoutez cette méthode pour récupérer les processus liés à un audit spécifique
    getProcessesByAudit(auditId: number): Observable<auditProcesses[]> {
      return this.httpClient.get<auditProcesses[]>(`${this.baseUrl}/audit/${auditId}/processes`);
    }

    addProcess(process: auditProcesses): Observable<object> {
      return this.httpClient.post(`${this.baseUrl}/add`, process);
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

