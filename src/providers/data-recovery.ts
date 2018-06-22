import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hike } from '../model/hike';

/*
  Generated class for the DataRecoveyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataRecoveyProvider {

      apiUrl = 'https://www.data.gouv.fr/fr/datasets/r/982d8640-faf8-4fdc-a5de-6e6bad1148f0';

      constructor(public http: HttpClient) {
        console.log('Hello DataRecoveyProvider Provider');
      }


      getAll() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl).subscribe( (data) => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }

}
