import { useState, useEffect } from 'react';
import { Layout } from '../../components';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { fetchDetailFromApi } from '../../utils/fetchFromApi';
import { VideoDetails } from '../../interfaces/index';

type Props = {};

const VideoDetail = (props: Props) => {
	const router = useRouter();
	const { videoId } = router.query;

	const [videoDetail, setVideoDetail] = useState<VideoDetails>();

	useEffect(() => {
		let mounted = true;

		if (mounted) {
			fetchDetailFromApi(
				`contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
				'videos'
			).then((response) => setVideoDetail(response));
		}

		return () => {
			mounted = false;
		};
	}, [videoId]);

	return (
		<Layout title={`Video || ${videoId}`}>
			<Text>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
				quisquam!
			</Text>
		</Layout>
	);
};

export default VideoDetail;
