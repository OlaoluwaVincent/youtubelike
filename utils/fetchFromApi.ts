import axios from 'axios';
import { Response, VideoDetails } from '../interfaces/index';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	url: BASE_URL,
	params: {
		maxResults: '50',
		order: 'date',
	},
	headers: {
		'X-RapidAPI-Key': '9ab5275652msha8b4f9934c2191ap1210fejsne9d796911f4f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};

export const fetchFromApi = async (url: string) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	const res: Response = data;
	return res.items;
};

//

export const fetchDetailFromApi = async (
	url: string,
	contentType: 'videos' | 'channels'
) => {
	const options = {
		url: BASE_URL,
		params: { part: 'contentDetails,snippet,statistics' },
		headers: {
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const { data } = await axios.get(
		`${BASE_URL}/${contentType}?part=${url}`,
		options
	);
	const res: VideoDetails = data.items[0];
	return res;
};

// channels
// snippet%2Cstatistics&id=UCBVjMGOIkavEAhyqpxJ73Dw
