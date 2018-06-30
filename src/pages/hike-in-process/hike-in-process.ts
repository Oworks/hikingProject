import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { MapService } from '../../providers/map-service';
import { Hike } from '../../model/hike';
import { TimerService } from '../../providers/timer-service';

@Component({
  selector: 'page-hike-in-process',
  templateUrl: 'hike-in-process.html',
})
export class HikeInProcess {

    public item : Hike;

    @ViewChild('map')
    public map : ElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
      public timerService : TimerService, private _mapService : MapService) {
      this.item = navParams.get('item');
    }

    public ngAfterViewInit() : void {
      this._mapService
        .init(this.map, this.item.start)
        .travel(this.item.steps, this.item.start, this.item.end)
        .watch();
    }

    public ngOnDestroy(): void {
      this.timerService
        .stop()
        .reset();
    }

    public startTimer() : void {
      this.timerService.start();
    }

    public stopTimer() : void {
      this.timerService.stop();
    }

    public resetTimer() : void {
      this.timerService.reset();
    }
}
