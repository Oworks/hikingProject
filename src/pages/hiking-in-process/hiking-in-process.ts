import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the HikingInProcess page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hiking-in-process',
  templateUrl: 'hiking-in-process.html',
})
export class HikingInProcess {
  location: {
    latitude: number,
    longitude: number
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation = geolocation;
  }
  findUserLocation(){
  let options = {
    enableHighAccuracy: true,
    timeout: 25000
  };

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HikingInProcess');
  // };
  // latitude = 45.777222;
  // longitude = 3.087025;


getCurrentPosition(){
  return new Promise((resolve,error)=>{
    this.geolocation.getCurrentPosition().then((position) => {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      resolve([latitude,longitude]);
    }).catch((error)=> {
      error('Error getting location');
    });
  });
};

getPositionUpdated(): Observable<Position>{
  return Observable.create(
    (observer) =>{
      navigator.geolocation.watchPosition((pos: Position) => {


        observer.next(pos);
      });
      {
        enableHighAccuracy: true
      }
    }
  );

};
  // this.geolocation.getCurrentPosition(options).then((position) => {
  //   this.location = {
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude
  //     // latitude = 45.777222;
  //     // longitude = 3.087025;
  //   };
  //   console.log(this.location);
  // }).catch((error) => {
  //   console.log('Error getting location', error);
  // });


}
}
