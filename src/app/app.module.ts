import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import{VideoCapturePlus}  from "@ionic-native/video-capture-plus/ngx";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Assurez-vous que IonicModule est importé avec forRoot()
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    HttpClient,
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy },
    Camera,
    MediaCapture,
    File,
    FileOpener,
    VideoCapturePlus // Ajout du service File aux fournisseurs

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
