import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HikeDetails } from '../hike-details/hike-details';
import { Hike } from '../../model/hike';
import { OpenDataService } from '../../providers/opendata-service';

@Component({
  selector: 'page-list',
  templateUrl: 'hikes-list.html'
})
export class HikesList {

  public hikes : Hike[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    loading : LoadingController, dataService : OpenDataService) {
    const loader = loading.create({ content: "Fetching data..." });
    loader.present();
    dataService.fetch().then(parsedData => {
      this.hikes = parsedData;
      loader.dismiss();
    }).catch(err => {
      window.alert(`ERROR FETCHING DATA : ${err}`);
      loader.dismiss();
    });
  }

  public itemTapped(evt, hike : Hike) : void {
    this.navCtrl.push(HikeDetails, {
      item: hike
    });
  }
}
