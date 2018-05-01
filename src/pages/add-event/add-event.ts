import { guests } from './../../guests.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-event',
	templateUrl: 'add-event.html'
})
export class AddEventPage {
	name: string;
	description: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private db: AngularFirestore,
		public alertCtrl: AlertController
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddEventPage');
	}
	addEvent(name: string, description: string) {
		const id = this.db.createId();
		this.db.collection('Events').doc(id).set({ id, name, description });
		let alert = this.alertCtrl.create({
			title: 'Nuevo Evento!',
			subTitle: 'El evento: ' + name + ' fue creado con exito!',
			buttons: [ 'OK' ]
		});
		alert.present();
	}
}
