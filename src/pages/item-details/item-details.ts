import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  // selectedItem: {title: string} | any;
  selectedItem: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');
    this.selectedItem = navParams.get('hiking');
  }
  openHikingInProcess(){
    this.navCtrl.push('HikingInProcess');
  }
}
