import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikingDetails } from '../hiking-details/hiking-details';
import { HikingModel } from '../../model/hiking-model';
import { CoordinatesModel } from '../../model/coordinates-model';


@Component({
  selector: 'page-list',
  templateUrl: 'hikings-list.html'
})
export class HikingsList {

  public hikings: Array<HikingModel>;

  private icons: string[];

  private items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.hikings = [
      new HikingModel('hiking1', {
        latitude: 101.43,
        longitude: 118.10
      }, {
        latitude: 231.23,
        longitude: 120.12
      }, new CoordinatesModel()),

      new HikingModel('hiking2', {
        latitude: 231.23,
        longitude: 120.12
      }, {
        latitude: 101.43,
        longitude: 118.10
      }, new CoordinatesModel()),
  ];
}

  itemTapped(evt, item, hiking) {
    this.navCtrl.push(HikingDetails, {
      item: item,
      hiking: hiking
    });
  }
}
