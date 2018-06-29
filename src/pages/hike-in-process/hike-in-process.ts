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

    @ViewChild('map')
    map : ElementRef;

    public item : Hike;

    constructor(public navCtrl: NavController, public navParams: NavParams, public timerService : TimerService,
      private _mapService : MapService) {
      this.item = navParams.get('item');
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

    /**
     * Start geolocation and set up steps markers if needed
     */
    public ngAfterViewInit() : void {
      this._mapService.init(this.map, this.item.start);
      if (this.item.steps.isEmpty()) {
        this._mapService.watch();
      } else {
        this._mapService
          .travel(this.item.steps, this.item.start, this.item.end)
          .watch();
      }
    }

    /**
     * Reset timer when leaving page
     */
    public ngOnDestroy(): void {
      this.timerService.stop();
      this.timerService.reset();
    }
}
