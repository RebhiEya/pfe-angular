import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  controlId: string = '';
  teamData: any;



  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }


  async ngOnInit() {
    // Récupérer l'ID du contrôle à partir des paramètres de l'URL
    this.route.params.subscribe((params: any) => {
      this.controlId = params['id'] || '';
      // Charger les données de la checklist en fonction de l'ID du contrôle
      this.loadteamtData();
    });
  }


  async loadteamtData() {
      this.teamData = await this.dataService.getTeamByControl(this.controlId);
      console.log(this.teamData);
    }

}
