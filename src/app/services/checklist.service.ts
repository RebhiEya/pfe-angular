import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ControlCheckList } from '../models/ControlCheckList.model';
import { Qualitycontrol } from '../models/Qualitycontrol.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private  urlRoot ="http://localhost:8089/controlCheckList";

  constructor(private httpClient: HttpClient) {}

  private checklist: ControlCheckList[] = [];

  getChecklist(): ControlCheckList[] {
    return this.checklist;
  }

  // Method to set the checklist
  setChecklist(items: ControlCheckList[]) {
    this.checklist = items;
  }



  getChecklistByProduit(id: any) {
    return this.httpClient.get<any[]>(`http://localhost:8089/controlCheckList/getByIdProduit/${id}`);

    }
    getChecklistByControl(id: any) {
      return this.httpClient.get<any[]>(`http://localhost:8089/controlCheckList/getByIdControl/${id}`);
      }
    createControl(controlData: any, userId : Number, produitId: Number, checklistIds: Number[]): Observable<Qualitycontrol> {
      const body = {
        qualityControl: controlData,
        userId,
        produitId: produitId,
        checklistIds: checklistIds
      };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.httpClient.post<Qualitycontrol>(`http://localhost:8089/qualiyControl/add`, body, { headers: headers });
    }

    updateConformity(itemId: number, conformity: boolean): Observable<any> {
      // Méthode pour mettre à jour la conformité d'un élément de checklist
      return this.httpClient.put<any>(`http://localhost:8089/controlCheckList/updateConformity/1${itemId}`, { conformity });
    }


}
