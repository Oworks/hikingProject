import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HikingDetails } from '../pages/hiking-details/hiking-details';
import { HikingsList } from '../pages/hikings-list/hikings-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { MapService } from '../services/map.service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    HikingDetails,
    HikingsList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    HikingDetails,
    HikingsList
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    MapService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
