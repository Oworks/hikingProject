import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HikingInProcess } from './hiking-in-process';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    HikingInProcess,
  ],
  imports: [
    IonicPageModule.forChild(HikingInProcess),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKSP38PkXF39qsDn-NWEgDuPG0IHoRj3k'
    }),
  ],
})
export class HikingInProcessModule {}
