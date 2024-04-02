import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FilesystemDirectory } from '@capacitor/filesystem';

const { Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public videos: string[] = [];
  private VIDEOS_KEY: string = 'videos';

  constructor() {}

  async loadVideos() {
    const videoList = await Storage['get']({ key: this.VIDEOS_KEY });
    if (videoList && videoList.value) {
      this.videos = JSON.parse(videoList.value) as string[] || [];
    }
    return this.videos;
  }

  async storeVideo(blob: Blob) {
    const fileName = new Date().getTime() + 'mp4';
    const base64 = await this.convertBlobToBase64(blob) as string;
    const savedFile = await Filesystem['writeFile']({
      path: fileName,
      data: blob,
      directory: FilesystemDirectory.Data
    });

    if (savedFile && savedFile.uri) {
      this.videos.unshift(savedFile.uri);
    }
    console.log('my array now ', this.videos);

    return Storage['set']({
      key: this.VIDEOS_KEY,
      value: JSON.stringify(this.videos)
    });
  }

  //helper function
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });



  async getVideoUrl(fullPath: string) {
    const path = fullPath.substr(fullPath.lastIndexOf('/') + 1);
    const file = await Filesystem['readFile']({
      path: path,
      directory: FilesystemDirectory.Data
    });

    return `data:video/mp4;base64,${file.data}`;
  }
}
