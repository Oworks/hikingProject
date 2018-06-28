import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { HikingModel } from '../model/hiking-model';
import { HikingModel } from '../model/hiking-model';



/*
  Generated class for the DataRecoveyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataRecoveyProvider {

  // apiUrl:string = 'https://www.data.gouv.fr/fr/datasets/r/982d8640-faf8-4fdc-a5de-6e6bad1148f0';
  apiUrl:string = 'https://www.data.gouv.fr/fr/datasets/r/3384cc8e-cf4c-4535-99a0-939d6fdc6596';


  constructor(public httpClient: HttpClient) {
    console.log('Hello DataRecoveyProvider Provider');
  }


  public getAll(): Observable<HikingModel> {
    return this.httpClient.get(this.apiUrl)
      .map(data => {
        let hiking = new HikingModel();
        let steps = new CoordinatesModel();
        let start = {
            lng: data["features"].geometry.coordinates[0][0],
            lat: data["features"].geometry.coordinates[0][1]
        }
        let end = {
          lng: data["features"].geometry.coordinates.last()[0],
          lat: data["features"].geometry.coordinates.last()[1]
        }
        hiking.name = data["features"].properties.NOM_COMM;
        hiking.start = start;
        hiking.end = end;
        for(let i=0; i < data["features"].geometry.coordinates.length; i++){
            let steps = hiking.steps.add(data["features"].geometry.coordinates.length[i][0], data["features"].geometry.coordinates.length[i][1]);
        }
        hiking.steps= steps;
        )
        return  data.map((hiking) =>  new  HikingModel(hiking));

      }).catch((err)=>{
        console.error(err);
        return err;
      });
  }


}
