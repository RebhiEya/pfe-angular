import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ControlCheckList } from 'src/app/models/ControlCheckList.model';


@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.page.html',
  styleUrls: ['./add-checklist.page.scss'],
})
export class AddChecklistPage implements OnInit {

  controlCheckList : ControlCheckList = {
    category: '',
    criteria: '',
    operation: '',
    conformity: '',
    defects: '',
    measures: 0,
    description: ''
    }

    constructor(private dataService: DataService,
      private router: Router) { }

    ngOnInit() {
    }
    ajouterchecklist() {
      this.dataService.createchecklist(this.controlCheckList).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/produits'])
      })
      }


}
