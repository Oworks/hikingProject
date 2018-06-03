import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HikingInProcess } from './hiking-in-process';

@NgModule({
  declarations: [
    HikingInProcess,
  ],
  imports: [
    IonicPageModule.forChild(HikingInProcess),
  ],
})
export class HikingInProcessModule {}
