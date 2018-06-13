import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { MapService } from '../../services/map.service';
import { HikingModel } from '../../model/hiking-model';

@IonicPage()
@Component({
  selector: 'page-hiking-in-process',
  templateUrl: 'hiking-in-process.html',
})
export class HikingInProcess {

    @ViewChild('map')
    map : ElementRef;

    private _item : HikingModel;

    constructor(public navParams: NavParams, private _mapService : MapService) {
      this._item = navParams.get('item');
    }

    ngAfterViewInit() {
      this._mapService
        .track(this.map, this._item.start, this._item.end)
        .watch();
    }
}
