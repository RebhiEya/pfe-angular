import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-auditprocess',
  templateUrl: './auditprocess.page.html',
  styleUrls: ['./auditprocess.page.scss'],
})
export class AuditprocessPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  addAuditProcess(){

  }
  redirecttoaddprocess(){
    this.router.navigate(['/addprocess']);

  }
}
