import { ListInvitadosPage } from './../list-invitados/list-invitados';
import { event } from './../../event.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-events',
	templateUrl: 'detail-events.html'
})
export class DetailEventsPage {
	detailEvent: event;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.detailEvent = navParams.get('currentItem');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailEventsPage');
	}
	goToPageListaEventos(event: event) {
		this.navCtrl.push('ListInvitadosPage', { currentItem: event });
	}
}
