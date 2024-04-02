import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-audit',
  templateUrl: './add-audit.page.html',
  styleUrls: ['./add-audit.page.scss'],
})
export class AddAuditPage implements OnInit {
  empFrom : FormGroup;



  constructor(private router: Router,
    private dataService: DataService ,
    private _fb : FormBuilder) {
      this.empFrom = this._fb.group({
        category:'',
        designation:'',
        startDate:'',
        endDate:'',
        state:'',
        reference:'',
      })
    }

  ngOnInit() {
  }

//  async ajouterdefaut() {
 //   const result = await this.dataService.createControl(this.emp);
 //   console.log(result);
  //}

  onFormSubmit(){
    if (this.empFrom.valid){
      console.log(this.empFrom.value);
    }

    this.dataService.createControl(this.audit).subscribe(data =>{
      console.log(data);
      this.r
    })

  }

}
