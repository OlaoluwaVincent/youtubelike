import { IconType } from 'react-icons/lib/esm/iconBase';

export interface Categories {
	name: string;
	icon: IconType;
}

export interface ResponseItem {
	kind: string;
	/**
	 {*kind: string;
	 *videoId: string;
	 *channelId: string;}
		string;
	 */
	id: any;
	snippet: Snippet;
	statistics?: Statistics;
}

export interface Response {
	kind: string;
	items: ResponseItem[];
}

export interface VideoDetails {
	contentDetails: VideoContentDetails;
	id: string;
	kind: string;
	snippet: Snippet;
	statistics: Statistics;
}

export interface ChannelDetails {
	brandingSettings: BrandSettings;
	contentDetails: VideoContentDetails;
	id: string;
	kind: string;
	snippet: Snippet;
	statistics: Statistics;
}

interface BrandSettings {
	channel: {
		country: string;
		description: string;
		keywords: string;
		title: string;
		trackingAnalyticsAccountId: string;
		unsubscribedTrailer: string;
	};
	image: {
		bannerExternalUrl: string;
	};
}

interface Thumbnails {
	height: number;
	url: string;
	width: number;
}

interface Statistics {
	commentCount?: string;
	favoriteCount?: string;
	likeCount?: string;
	hiddenSubscriberCount?: false;
	subscriberCount?: string;
	videoCount?: string;
	viewCount?: string;
}

interface VideoContentDetails {
	relatedPlaylists:
		| { likes: string; uploads: string }
		| {
				caption: boolean;
				contentRating: {};
				definition: string;
				dimension: string;
				duration: string;
				licensedContent: boolean;
				projection: string;
		  };
}

interface Snippet {
	country?: string;
	customUrl?: string;
	categoryId?: string;
	defaultAudioLanguage?: string;
	localized?: {
		description: string;
		title: string;
	};
	channelId?: string;
	channelTitle?: string;
	description?: string;
	liveBroadcastContent?: string;
	publishTime?: string;
	publishedAt?: string;
	title: string;
	thumbnails?: {
		default: Thumbnails;
		high: Thumbnails;
		medium: Thumbnails;
	};
}
