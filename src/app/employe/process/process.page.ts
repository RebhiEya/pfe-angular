import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Filesystem, Directory, FilesystemDirectory } from '@capacitor/filesystem';


@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  processData: any[] = []; // Initialize processData as an empty array
  auditId: string = '';
  recording = false;
  storedFilesNames: string[] = [];

  constructor( private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
   
  }

 

  openVoice() {}
  openPhoto() {}
  openVideo() {}

  toggleComment() {}

  navigatetoauditchecklist() {
    this.router.navigate(['/checklistprocesss']);
  }

  startRecording() {}

  async loadFiles() {
    Filesystem.readdir({
      path: '',
      directory: Directory.Data
    }).then(result => {
      console.log(result);
      // Si result.files est défini et n'est pas vide, mappez les noms de fichier
      if (result.files) {
        this.storedFilesNames = result.files.map(fileInfo => fileInfo.name);
      }
    });
  }

  goTomyauditPage() {
    this.router.navigate(['/my-audit']); // Assurez-vous que '/process' est le chemin de votre page de processus
  }

  redirectTostrength() {
    this.router.navigate(['/strength']);
  }

  redirectTorecommendation() {
    this.router.navigate(['/recommendation']);
  }

  redirectToweakness() {
    this.router.navigate(['/weakness']);
  }
 
}
