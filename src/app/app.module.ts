import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; 
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule, AngularFireStorageModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()), CommonModule, BrowserModule, HttpClientModule
], 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class ProductModule { }
