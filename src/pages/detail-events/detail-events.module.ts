import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailEventsPage } from './detail-events';

@NgModule({
  declarations: [
    DetailEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailEventsPage),
  ],
})
export class DetailEventsPageModule {}
