
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';
import { AuthService } from 'src/app/services/auth.service';
import { MycontrolService } from 'src/app/services/mycontrol.service';
@Component({
  selector: 'app-tabbord',
  templateUrl: './tabbord.page.html',
  styleUrls: ['./tabbord.page.scss'],
})
export class TabbordPage implements OnInit {
  produitsStatistiques: any[] = []; // Déclaration de la propriété produitsStatistiques
  processusStatistiques: any[] = [];
  controleStatistiques: any[] = []; 
  auditStatistiques: any[] = [];  // Déclaration de la propriété processusStatistiques
  data: any[] = [];

  constructor(
    private dataService: DataService,
    private auditProcessesService: AuditprocessesService,
    private authService: AuthService,
    private controlservice: MycontrolService 
    
  ) {}

  ngOnInit() {
    this.loadProduits();
    this.loadProcessus();
    this.loadAudits();
    this.loadControl();
    
  }

  loadProduits() {
    this.dataService.getAllProduit().subscribe((produits) => {
      this.produitsStatistiques = produits;
      // Calculez vos statistiques sur les produits ici en utilisant les données dans this.produitsStatistiques
    });
  }

  loadProcessus() {
    this.auditProcessesService.getAllProcesses().subscribe((processus) => {
      this.processusStatistiques = processus;
      // Calculez vos statistiques sur les processus ici en utilisant les données dans this.processusStatistiques
    });
  }
  loadAudits() {
    this.auditProcessesService.all_qualiyControl().subscribe((audit) => {
      this.controleStatistiques = audit; // Assigner les données des audits à la propriété des produits
      // Calculez vos statistiques sur les produits ici en utilisant les données dans this.produitsStatistiques
    });
  }
  
  loadControl() {
    this.controlservice.all_qualiyControl().subscribe((control) => {
      this.auditStatistiques = control; // Assigner les données des contrôles à la propriété des processus
      // Calculez vos statistiques sur les processus ici en utilisant les données dans this.processusStatistiques
    });
  }
  
  logout(){
    this.authService.Logout()
  }
}


 



