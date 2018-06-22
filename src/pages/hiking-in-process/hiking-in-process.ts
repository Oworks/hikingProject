import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { MapService } from '../../providers/map-service';
import { Hike } from '../../model/hike';

@IonicPage()
@Component({
  selector: 'page-hiking-in-process',
  templateUrl: 'hiking-in-process.html',
})
export class HikingInProcess {

    @ViewChild('map')
    map : ElementRef;

    private _item : Hike;

    constructor(public navParams: NavParams, private _mapService : MapService) {
      this._item = navParams.get('item');
    }

    public ngAfterViewInit() : void {
      const item = this._item;
      this._mapService.init(this.map, item.start);

      if (item.steps.isEmpty()) {
        this._mapService.watch();
      } else {
        this._mapService
          .steps(item.steps, item.start, item.end)
          .watch();
      }
    }
}
