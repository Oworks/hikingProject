import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hike } from '../model/hike';
import { Steps } from '../model/steps';
import { Point } from '../model/point';
import { Observable } from 'rxjs/Observable';

/**
 * Open data service
 * Fetch locations data and map it into hikes
 */
@Injectable()
export class OpenDataService {
  
  private _URL : string = 'https://geo.data.gouv.fr/api/geogw/file-packages/330f16f0c3db9aeaee868ca26777e20dfa189e65/download?format=GeoJSON&projection=WGS84';

  private _hikes : Hike[] = [];

  constructor (private _httpClient: HttpClient) {}

  /**
   * Fetch and parse data
   * @return observer providing mapped array
   */
  public fetch() : Observable<Hike[]> {
    return new Observable(observer => {
      this._httpClient.get(this._URL).subscribe(data => {
        this.parse(data);
        observer.next(this._hikes);
        observer.complete();
      }, err => {
        observer.error(err);
      });
    });
  }

  /**
   * Parse data into new hikes
   * @param data to parse
   * @param hikes receiver array
   */
  private parse(data) : void {
    data.features.map(stub => {
      const steps = new Steps();
      const name = stub.properties.NOM_BOUCLE;
      const coords = stub.geometry.coordinates;
      const start = new Point('start', coords[0][1], coords[0][0]);
      const end = new Point('end', coords[Math.ceil((coords.length - 1) / 2)][1],
        coords[Math.ceil((coords.length - 1) / 2)][0]);
      steps.add('step', coords[Math.ceil((coords.length - 1) / 4)][1], 
        coords[Math.ceil((coords.length - 1) / 4)][0]);
      if (!name || !coords || !start || !end) return;
      this._hikes.push(new Hike(name, start, end, steps));
    });
  } 

}
