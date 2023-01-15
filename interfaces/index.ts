import { IconType } from 'react-icons/lib/esm/iconBase';

export interface Categories {
	name: string;
	icon: IconType;
}

export interface ResponseItem {
	kind: string;
	id: {
		kind: string;
		videoId: string;
		channelId: string;
	};
	snippet: {
		channelId: string;
		channelTitle: string;
		description: string;
		liveBroadcastContent: string;
		publishTime: string;
		publishedAt: string;
		title: string;
		thumbnails: {
			default: Thumbnails;
			high: Thumbnails;
			medium: Thumbnails;
		};
	};
}

export interface Response {
	kind: string;
	items: ResponseItem[];
}

interface Thumbnails {
	height: number;
	url: string;
	width: number;
}
