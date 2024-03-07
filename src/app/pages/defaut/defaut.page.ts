import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-defaut',
  templateUrl: './defaut.page.html',
  styleUrls: ['./defaut.page.scss'],
})
export class DefautPage implements OnInit {
  DefautData:any;
  controlId: string = '';

  newOperation: string = '';
  newCriteria: string = '';
  newRequirement: string = '';
  newCompliance: boolean = false;
  newCommentName: string = '';
  newMeasureName: string = '';
  newControlAverageName: string = '';

  constructor(
    private router: Router,
    private camera: Camera,
    private mediaCapture: MediaCapture,
    private file: File,
    private platform: Platform,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  openVoice() {
    console.log('Fonctionnalité d\'enregistrement vocal');
  }

  async openPhoto() {
    try {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      };
      const imageUri: string = await this.camera.getPicture(options);
    } catch (error) {
      console.error('Erreur lors de la capture de la photo : ', error);
    }
  }

  async openVideo() {
    try {
      const options: CaptureVideoOptions = { limit: 1 };
      const mediaFiles: MediaFile[] | CaptureError = await this.mediaCapture.captureVideo(options);
      if (Array.isArray(mediaFiles)) {
        const videoPath: string = mediaFiles[0].fullPath;
      } else {
        console.error('Erreur lors de la capture de la vidéo : ', (mediaFiles as CaptureError));
      }
    } catch (error) {
      console.error('Erreur lors de la capture de la vidéo : ', error);
    }
  }


async ngOnInit() {
  // Récupérer l'ID du contrôle à partir des paramètres de l'URL
  this.route.params.subscribe((params: any) => {
    this.controlId = params['id'] || '';
    // Charger les données de la checklist en fonction de l'ID du contrôle
    this.loadDefautData();
  });
}

async loadDefautData() {

    this.DefautData = await this.dataService.getDefectsByControl(this.controlId);
    console.log(this.DefautData);
  }

  async deleteDefect(controlId: any) {
    try {
      await this.dataService.deleteControlDefect(this.controlId);
      // Actualiser les données après la suppression
      await this.loadDefautData();
    } catch (error) {
      console.error('Erreur lors de la suppression du défaut : ', error);
    }
  }

}
