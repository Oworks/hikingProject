import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


import {HikingModel} from '../../model/hiking-model';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  public hikings: Array<HikingModel>;


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
      new HikingModel('hiking1', 10, 'clermont', 'aubière'),
      new HikingModel('hiking2', 20, 'clermont', 'rion')
  ];


  }

  itemTapped(event, item,hiking) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item,
      hiking: hiking

    });
  }
}
