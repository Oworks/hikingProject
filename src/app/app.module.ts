import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HikeDetails } from '../pages/hike-details/hike-details';
import { HikesList } from '../pages/hikes-list/hikes-list';
import { HikeInProcess } from '../pages/hike-in-process/hike-in-process';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { MapService } from '../providers/map-service';
import { OpenDataService } from '../providers/opendata-service';
import { TimerService } from '../providers/timer-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    HikeDetails,
    HikesList,
    HikeInProcess
  ],
  imports: [
    BrowserModule,
    PipesModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HikeDetails,
    HikesList,
    HikeInProcess
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    HttpClient,
    MapService,
    OpenDataService,
    TimerService,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ]
})

export class AppModule {}
