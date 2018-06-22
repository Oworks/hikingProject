import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hike } from '../../model/hike';


@Component({
  selector: 'page-item-details',
  templateUrl: 'hiking-details.html'
})
export class HikingDetails {

  public selectedItem: Hike;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('hiking');
  }

  openHikingInProcess() {
    this.navCtrl.push('HikingInProcess', {
      item: this.selectedItem
    });
  }
}
