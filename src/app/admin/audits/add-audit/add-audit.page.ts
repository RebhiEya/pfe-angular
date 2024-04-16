import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-audit',
  templateUrl: './add-audit.page.html',
  styleUrls: ['./add-audit.page.scss'],
})
export class AddAuditPage {
  category: string = '';
  designation: string = '';
  startDate: string = '';
  endDate: string = '';
  state: string = '';
  reference: string = '';

  constructor(private auditService: DataService) {}

  addAudit() {
    const auditData = {
      category: this.category,
      designation: this.designation,
      startDate: this.startDate,
      endDate: this.endDate,
      state: this.state,
      reference: this.reference
    };

    // this.auditService.addAudit(auditData).subscribe((response: any) => {
    //   console.log('Audit ajouté avec succès:', response);
    //   // Réinitialiser les champs après l'ajout
    //   this.category = '';
    //   this.designation = '';
    //   this.startDate = '';
    //   this.endDate = '';
    //   this.state = '';
    //   this.reference = '';
    // }, (error: any) => {
    //   console.error('Erreur lors de l\'ajout de l\'audit:', error);
    // });
  }
}
