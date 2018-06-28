import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikingDetails } from '../hiking-details/hiking-details';
import { Hike } from '../../model/hike';
import { Steps } from '../../model/steps';
import { Point } from '../../model/point';

@Component({
  selector: 'page-list',
  templateUrl: 'hikings-list.html'
})
export class HikingsList {

  public hikes : Hike[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // test data set
    let testSteps = new Steps();
    testSteps.add('step 1', 150.23, 180.46);
    testSteps.add('step 2', 200.55, 170.56);
    this.hikes = [
      new Hike('hiking1', new Point('start', 230, 145.67), new Point('end', 210, 136), testSteps),
      new Hike('hiking2', new Point('start', 230, 145.67), new Point('end', 210, 136), new Steps())
  ];
}

  itemTapped(evt, hike : Hike) {
    this.navCtrl.push(HikingDetails, {
      item: hike
    });
  }
}
