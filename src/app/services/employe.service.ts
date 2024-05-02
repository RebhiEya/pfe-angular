import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Controldefect } from 'src/app/models/Controldefect.model';
import { AdminService } from 'src/app/services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private  urlRoot ="http://localhost:8089";


  controldefect : Controldefect = {
    idControlDefect : 0,
    category : '',
    code : '',
    quantity: '',
    description: ''
  }

  
  constructor( private httpClient: HttpClient, private router: Router, private adminService: AdminService,
    private alertController: AlertController) { }


    private defect: Controldefect[] = [];


    getAllDefect(){
        return this.httpClient.get<any[]>(`${this.urlRoot}/controlDefect/getAll`);
      }

    createdefect(controldefect: Controldefect): Observable<object> {
      return this.httpClient.post( `${this.urlRoot}/controlDefect/add` , controldefect ) ;
    }

    deleteDefect (id: any): Observable<any> {
        return this.httpClient.delete<any>(`${this.urlRoot}/controlDefect/delete/${id}`);
      }

      updateDefect(id: any,item: any): Observable<any>{
        return this.httpClient.put<any>(`${this.urlRoot}/controlDefect/update/${id}`, item );
      }

      getDefect(): Controldefect[] {
        return this.defect;
      }

      setDefect(items: Controldefect[]) {
        this.defect = items;
      }
    }

