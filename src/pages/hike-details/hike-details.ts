import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hike } from '../../model/hike';
import { HikeInProcess } from '../hike-in-process/hike-in-process';


@Component({
  selector: 'page-hike-details',
  templateUrl: 'hike-details.html'
})
export class HikeDetails {

  public selectedItem: Hike;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  public start(evt) : void {
    this.navCtrl.push(HikeInProcess, {
      item: this.selectedItem
    });
  }
}
