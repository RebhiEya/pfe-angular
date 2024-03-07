import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mycontrol',
  templateUrl: './mycontrol.page.html',
  styleUrls: ['./mycontrol.page.scss'],
})
export class MycontrolPage implements OnInit {
  data: any; // Utilisez la variable de classe ici
  showComment: boolean = false;
  teamData: any;
  controlId: string = '';


  constructor(private dataService: DataService ,  private router: Router , private route: ActivatedRoute) {}

  async ngOnInit() {
   await this.loadData();
   }
 async loadData() {
    this.data = await this.dataService.getAllControls();
    this.data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

    console.log(this.data);
  }

 // async ngOnInit() {
    // Récupérer l'ID du contrôle à partir des paramètres de l'URL
  // this.route.params.subscribe((params: any) => {
  //    this.controlId = params['id'] || '';
     //  Charger les données de la checklist en fonction de l'ID du contrôle
   //   this.loadteamtData();
   // });
// }


  async loadteamtData() {
      this.teamData = await this.dataService.getControlTeam(this.controlId);
      console.log(this.teamData);
    }

  openAttachment(){}


  navigateToChecklists(controlId: any) {
    this.router.navigate(['/checklist', controlId]); // Redirection vers la page de checklist avec l'ID du contrôle en tant que paramètre
  }

  navigateToDefects(controlId: any) {
    this.router.navigate(['/defaut', controlId]); // Redirection vers la page de checklist avec l'ID du contrôle en tant que paramètre
  }

  navigateToteam(controlId: any){
    this.router.navigate(['/team', controlId]);
  }


}
