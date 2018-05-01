import { EventsPage } from './../events/events';
import { user } from './../../user.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	usuario: string;
	contrasenia: string;
	constructor(
		public navCtrl: NavController,
		public afAuth: AngularFireAuth,
		private db: AngularFirestore
	) {}
	createUser(user: string, pass: string) {
		this.afAuth.auth.createUserWithEmailAndPassword(user, pass).then((usuario) => {
			const id = this.db.createId();
			this.db.collection('Users').doc(id).set({ id, user, pass });
		});
	}
}
