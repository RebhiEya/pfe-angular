import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})


export class ChecklistPage implements OnInit {
  checklistData: any;
  controlId: string = '';

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }
 // navigateToChecklists() {
 //   this.router.navigate(['/checklist']); // Utilisez le service Router pour naviguer vers la page de checklists
 // }
 // navigateToDefects() {
 //   this.router.navigate(['/defaut']); // Utilisez le service Router pour naviguer vers la page de checklists
 // }


  async ngOnInit() {
    // Récupérer l'ID du contrôle à partir des paramètres de l'URL
    this.route.params.subscribe((params: any) => {
      this.controlId = params['id'] || '';
      // Charger les données de la checklist en fonction de l'ID du contrôle
      this.loadChecklistData();
    });
  }

  async loadChecklistData() {

      this.checklistData = await this.dataService.getCheckListByControl(this.controlId);
      console.log(this.checklistData);
    }
    async captureVideo() {
      try {
        const image = await Plugins['Camera']['getPhoto']({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
          mediaType: 'video'
        });

        // Manipulez la vidéo capturée ici
        console.log(image);
      } catch (error) {
        console.error(error);
      }
    }

  }














