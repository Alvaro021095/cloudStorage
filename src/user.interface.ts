import { event } from './event.interface';

export interface user {
	id: string;
	user: string;
	pass: string;
	events: event[];
}
