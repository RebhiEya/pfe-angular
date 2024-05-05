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
  baseUrl = 'http://localhost:8089/process';

  
  apiUrl = 'http://localhost:8089/processCheklist';
  APIURL= 'http://localhost:8089/audit';

  constructor(private httpClient: HttpClient) { }
  private checklist: ProcessChecklist[] = [];

  process: auditProcesses = {
    idProcess: 0,
    nom: '',
    recommendation: '',
    strength: '',
    weakness: '',
    checklistScore: 0
  };


    //audit
    addAudit(auditData: any): Observable<any> {
      return this.httpClient.post<any>(`${this.APIURL}/add`, auditData);
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

  

    addProcessWithChecklist(process: auditProcesses, checklistId: number): Observable<auditProcesses> {
      return this.httpClient.post<auditProcesses>(`${this.baseUrl}/process/process-with-checklist?checklistId=${checklistId}`, process);
    }

    getChecklistsByProcess(processId: number): Observable<ProcessChecklist[]> {
      return this.httpClient.get<ProcessChecklist[]>(`${this.baseUrl}/process/${processId}/checklists`);
    }

    getProcess(){
      return this.process;
    }

    deleteProcessChecklist(checklistId: any): Observable<any> {
      return this.httpClient.delete<any>(`${this.apiUrl}/delete/${checklistId}`);
    }
    
  
    
    setProcess(process : any){
      this.process = process;

    }

    getProcessbyid(processId: number){

    }
   
    createchecklistprocess (idProcess: number, controlCheckList: any): Observable<object> {
      console.log( controlCheckList);
      return this.httpClient.post<auditProcesses>(`${this.baseUrl}/assign-checklist-to-process/${idProcess}`, controlCheckList);
    }
    createcontrol(){

    }

    getChecklistByProcess(id: any) {
      return this.httpClient.get<any[]>(`${this.baseUrl}/getByProcess/${id}`);
        }
        getChecklist(): ProcessChecklist[] {
          return this.checklist;
        }
      
        // Method to set the checklist
        setChecklist(items: ProcessChecklist[]) {
          this.checklist = items;
        }
        all_qualiyControl(){
          return this.httpClient.get<any[]>(`${this.APIURL}/getAll`);
      
        }
         deleteCQ(id: any): Observable<string> {
           return this.httpClient.delete(`http://localhost:8089/audit/delete/${id}`, { responseType: 'text' });
         }



         getChecklistByaudit(id: any) {
          return this.httpClient.get<any[]>(`http://localhost:8089/processCheklist/getByIdAudit/${id}`);
          }
          updateConformity(auditId: number,checklistId :number, conformity: boolean): Observable<any> {
            // Méthode pour mettre à jour la conformité d'un élément de checklist
            return this.httpClient.put(`http://localhost:8089/processCheklist/updateConformity?auditId=${auditId}&checklistId=${checklistId}&conformity=${conformity}`, {});
          }
          
          
          
      }