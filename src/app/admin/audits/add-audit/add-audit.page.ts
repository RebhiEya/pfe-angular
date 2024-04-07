import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Audit } from 'src/app/models/audit.model';


@Component({
  selector: 'app-add-audit',
  templateUrl: './add-audit.page.html',
  styleUrls: ['./add-audit.page.scss'],
})
export class AddAuditPage implements OnInit {
  audit: Audit = new Audit('', '', '', '', new Date(), new Date()); // Initialisation avec des valeurs par défaut
  auditForm: FormGroup;



  constructor(private router: Router,
    private dataService: DataService ,
    private formBuilder: FormBuilder

    ) {
      this.auditForm = this.formBuilder.group({
        category: [''],
        designation: [''],
        state: [''],
        reference: [''],
        startDate: [''],
        endDate: [''],
      });

    }

  ngOnInit(){
  }

//  async ajouterdefaut() {
 //   const result = await this.dataService.createControl(this.emp);
 //   console.log(result);
  //}

  onFormSubmit(){
    if (this.auditForm.valid) {
      const auditData: Audit = this.auditForm.value;
      this.dataService.createControl(auditData).subscribe(data => {
        console.log(data);
        // Redirection ou autre action après l'envoi réussi
      });
    } else {
      console.error("Le formulaire n'est pas valide");
    }
  }

}
