import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ChannelCard, Layout, Videos } from '../../components';
import { useEffect } from 'react';
import { fetchDetailFromApi, fetchFromApi } from '../../utils/fetchFromApi';
import { useRouter } from 'next/router';
import { ChannelDetails } from '../../interfaces';
import { ResponseItem } from '../../interfaces/index';

type Props = {};

const ChannelDetail = (props: Props) => {
	const router = useRouter();
	const { channelId } = router.query;
	const [data, setData] = useState<ChannelDetails>();
	const [videos, setVideos] = useState<ResponseItem[]>();

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			fetchDetailFromApi(`snippet&id=${channelId}`, 'channels').then(
				(response) => setData(response)
			);
			fetchFromApi(
				`search?channelId=${channelId}&part=snippet&order=date`
			).then((response) => setVideos(response));
		}
		return () => {
			mounted = false;
		};
	}, [channelId]);

	return (
		<Layout title={data?.snippet?.title} hideSideBar={true}>
			<Box height={'90vh'} overflowY={'auto'}>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<div
						style={{
							height: '300px',
							width: '100%',
							background:
								'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 86%)',
						}}
					></div>
					<ChannelCard channel={data} marginTop='-110px' />
				</Box>
				<Box display={'flex'} p={3} justifyContent={'flex-start'}>
					<Box>{videos && <Videos data={videos} />}</Box>
				</Box>
			</Box>
		</Layout>
	);
};

export default ChannelDetail;
