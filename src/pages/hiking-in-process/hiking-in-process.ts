import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-hiking-in-process',
  templateUrl: 'hiking-in-process.html',
})
export class HikingInProcess {

  public latitude;
  public longitude;

  constructor(geolocation: Geolocation) {
    geolocation.getCurrentPosition().then(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      console.log(this.longitude);
      console.log(this.latitude);
    }).catch(err => console.log(err));
  }
  
}
