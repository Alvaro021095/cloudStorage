import { DetailEventsPage } from './../detail-events/detail-events';
import { AddEventPage } from './../add-event/add-event';
import { event } from './../../event.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-events',
	templateUrl: 'events.html'
})
export class EventsPage {
	events$: Observable<event[]>;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private db: AngularFirestore
	) {
		this.events$ = db.collection<event>('Events').valueChanges();
		console.log(this.events$.subscribe((res) => console.log(res)));
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventsPage');
	}
	goToPageEventsAndAdd() {
		this.navCtrl.push('AddEventPage');
	}
	goToPageDetailEvent(event: event) {
		this.navCtrl.push('DetailEventsPage', { currentItem: event });
	}
}
