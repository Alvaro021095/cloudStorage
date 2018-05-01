// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyCTX0aicnfoVPrHGwfAH5hhdd3WqEB2j5M',
		authDomain: 'cloudstorage-f4e3f.firebaseapp.com',
		databaseURL: 'https://cloudstorage-f4e3f.firebaseio.com',
		projectId: 'cloudstorage-f4e3f',
		storageBucket: 'cloudstorage-f4e3f.appspot.com',
		messagingSenderId: '1081101575464'
	}
};
