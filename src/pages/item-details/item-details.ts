import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikingModel } from '../../model/hiking-model';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

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
