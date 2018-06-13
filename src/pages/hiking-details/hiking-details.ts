import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikingModel } from '../../model/hiking-model';


@Component({
  selector: 'page-item-details',
  templateUrl: 'hiking-details.html'
})
export class HikingDetails {

  public selectedItem: HikingModel;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('hiking');
  }

  openHikingInProcess() {
    this.navCtrl.push('HikingInProcess', {
      item: this.selectedItem
    });
  }
}
