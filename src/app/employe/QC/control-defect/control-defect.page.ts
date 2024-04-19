import { Component, OnInit , AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CameraResultType, CameraSource, Photo } from '@capacitor/camera';

import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { DataService } from 'src/app/services/data.service';
import { Controldefect}from 'src/app/models/Controldefect.model'
import { Plugins } from '@capacitor/core';
import { GestureController, LoadingController, Platform } from '@ionic/angular';
import { VideoService } from 'src/app/services/video.service';
import { Directory, FileInfo, Filesystem } from '@capacitor/filesystem';
import { finalize } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const IMAGE_DIR = 'stored-images';
const { Camera } = Plugins;


interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-control-defect',
  templateUrl: './control-defect.page.html',
  styleUrls: ['./control-defect.page.scss'],
})
export class ControlDefectPage {

  controldefect :Controldefect ={
    idControlDefect : 0,
    category : '',
    code : '',
    quantity: '',
    description: ''
  }
  DefautData:any;



  recording = false;
  storedFileNames: FileInfo[] = [];
  durationDisplay = '';
  duration = 0;
  @ViewChild('recordbtn', { read: ElementRef }) recordbtn!: ElementRef;
  images: LocalFile[] = [];
  mediaRecorder: MediaRecorder | null = null;

  constructor(
    private router: Router,
    private mediaCapture: MediaCapture,
    public dataService: DataService,
    private route: ActivatedRoute,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private gestureCtrl: GestureController,
    private videoService: VideoService,
    private changeDetector: ChangeDetectorRef,
    private http : HttpClient
  )

  {    this.mediaRecorder = {} as MediaRecorder;}
  addefault() {
    this.router.navigate(['/add-defaut']);
  }

  async ngOnInit() {
    this.loadFiles();

    }
  async loadFiles() {
    this.images = [];
    const loading = await this.loadingCtrl.create({
      message: 'loading data...',
    });

  await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result => {
      console.log('HERE:..', result);
      this.loadfileData(result.files.map(fileInfo => fileInfo.name));
    }, async err => {
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      });
    }).then(() => {
      loading.dismiss();
    });
  }

  async loadfileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;
      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      });
      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`
      });
      console.log('READ:.. ', readFile);
    }
  }


async selectImage() {
  const image = await Plugins['Camera']['getPhoto']({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
  });

  console.log(image);

  if (image) {
    this.saveImage(image);
  }

  this.router.navigate(['/file']);
}

async saveImage(photo: Photo) {
  const base64Data = await this.readAsBase64(photo);
  console.log(base64Data);
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    directory: Directory.Data,
    path: `${IMAGE_DIR}/${fileName}`,
    data: base64Data
  });
  console.log('saved: ', savedFile);
  this.loadFiles();

}


  async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!
      });
      return file.data;
    } else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      return await this.convertBlobToBase64(blob) as string;
    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

adddefect(){

}

async startUpload(file : LocalFile){
  const response = await fetch(file.data);
  const blob = await response.blob();
  const formData = new FormData();
  formData.append ('file', blob , file.name)
  this.uploadData(formData);
}
async uploadData(formData : FormData){
  const loading = await this.loadingCtrl.create({
    message :'Upp ipafe .........',
  });
  await loading.present();
  const url = 'C:\Users\wiki\OneDrive\Bureau';

  this.http.post(url, formData).pipe(
    finalize(() => {
        loading.dismiss();
      })
  ).subscribe(res => {
    console.log(res);
  })
}
async deleteImage(file : LocalFile){
  await Filesystem.deleteFile ({
    directory: Directory.Data,
    path : file.path
  });
  this.loadFiles();
}

}
