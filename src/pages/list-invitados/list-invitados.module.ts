import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListInvitadosPage } from './list-invitados';

@NgModule({
  declarations: [
    ListInvitadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListInvitadosPage),
  ],
})
export class ListInvitadosPageModule {}
