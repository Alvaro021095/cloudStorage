import { guests } from './guests.interface';

export interface event {
	id: string;
	name: string;
	description: string;
	list: guests[];
}
