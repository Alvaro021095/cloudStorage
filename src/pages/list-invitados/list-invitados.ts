import { guests } from './../../guests.interface';
import { event } from './../../event.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FirebaseStorage } from '@firebase/storage-types';
import { AngularFireStorage } from 'angularfire2/storage';

/**
 * Generated class for the ListInvitadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-list-invitados',
	templateUrl: 'list-invitados.html'
})
export class ListInvitadosPage {
	detailEventListGuest: event;
	list$: Observable<guests[]>;
	nameGuest: string;
	base64Image: string;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private db: AngularFirestore,
		public cameraPlugin: Camera,
		private storage: AngularFireStorage
	) {
		this.detailEventListGuest = navParams.get('currentItem');
		this.list$ = db
			.collection<guests>(`/Events/${this.detailEventListGuest.id}/guestList`)
			.valueChanges();
		console.log(this.list$.subscribe((res) => console.log(res)));
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListInvitadosPage');
	}

	addGuest(nameGuest: string) {
		const id = this.db.createId();
		console.log('Agregar invitado');
		this.storage
			.ref(id)
			.putString(this.base64Image, 'base64', { contentType: 'image/png' })
			.then((info) => {
				this.db
					.collection('Events')
					.doc(this.detailEventListGuest.id)
					.collection('guestList')
					.add({ id: id, name: nameGuest, image: info.metadata.downloadURLs[0] });
			});
	}

	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE
		};

		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.base64Image = imageData;
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
