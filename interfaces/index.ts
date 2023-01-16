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

export interface VideoDetails {
	contentDetails: ContentDetails;
	id: string;
	kind: string;
	snippet: Snippet;
	statistics: Statistics;
}

interface Thumbnails {
	height: number;
	url: string;
	width: number;
}

interface Statistics {
	commentCount: string;
	favoriteCount: string;
	likeCount: string;
	viewCount: string;
}

interface ContentDetails {
	caption: boolean;
	contentRating: {};
	definition: string;
	dimension: string;
	duration: string;
	licensedContent: boolean;
	projection: string;
}

interface Snippet {
	categoryId: string;
	channelId: string;
	channelTitle: string;
	title: string;
	defaultAudioLanguage: string;
	description: string;
	liveBroadcastContent: string;
	localized: {
		description: string;
		title: string;
	};
	publishedAt: string;
	thumbnails: {
		default: Thumbnails;
		high: Thumbnails;
		medium: Thumbnails;
	};
}
