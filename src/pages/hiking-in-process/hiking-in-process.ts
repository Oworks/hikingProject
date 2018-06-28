import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { MapService } from '../../providers/map-service';
import { DataRecoveyProvider } from '../../providers/data-recovery';
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
    // private  _hiking: HikingModel;

    constructor(public navParams: NavParams, private _mapService : MapService, public _dataProvider: DataRecoveyProvider  ) {
      this._item = navParams.get('item');
      // this.restProvider.getProducts().subscribe((hiking : Hiking)=>{
      // this._hiking = hiking;
      // console.log(this._hiking);
    }




    this._dataProvider.getAll();

    ngAfterViewInit() : void {
      this._mapService
        .track(this.map, this._item.start, this._item.end)
        .watch();
    };
}
