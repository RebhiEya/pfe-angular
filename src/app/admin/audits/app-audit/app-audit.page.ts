import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuditprocessesService } from 'src/app/services/auditprocesses.service';


@Component({
  selector: 'app-app-audit',
  templateUrl: './app-audit.page.html',
  styleUrls: ['./app-audit.page.scss'],
})
export class AppAuditPage implements OnInit {
  process : any;

  constructor(private dataService: AuditprocessesService ,
    private router: Router ,
    private toastController: ToastController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const recivedData = this.router.getCurrentNavigation()?.extras.state;
    if(recivedData){
      this.process = recivedData
  }

}

update(){
  this.dataService.updateProcess(this.process.idProcess,this.process).subscribe(
   ()=>this.router.navigate(['/auditprocrss']),
);


 const toast =  this.toastController.create({
   message: 'produit updated successfully',
   duration: 3000,
   position: 'top',
   cssClass: 'custom-toast'//Utiliser la classe CSS personnalisée
 });



}
}
