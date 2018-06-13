import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikingModel } from '../../model/hiking-model';


@Component({
  selector: 'page-item-details',
  templateUrl: 'hiking-details.html'
})
export class HikingDetails {

  private _selectedItem: HikingModel;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._selectedItem = navParams.get('hiking');
  }

  openHikingInProcess() {
    this.navCtrl.push('HikingInProcess', {
      item: this._selectedItem
    });
  }
}
