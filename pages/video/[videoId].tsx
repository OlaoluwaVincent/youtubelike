import { useState, useEffect } from 'react';
import { Layout } from '../../components';
import { Text, Box, Stack, Center, HStack } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/router';
import { fetchDetailFromApi, fetchFromApi } from '../../utils/fetchFromApi';
import { VideoDetails, ResponseItem } from '../../interfaces/index';
import ReactPlayer from 'react-player';
import { Videos } from '../../components';
import Link from 'next/link';

type Props = {};

const VideoDetail = (props: Props) => {
	const router = useRouter();
	const { videoId } = router.query;

	const [videoDetail, setVideoDetail] = useState<VideoDetails | null>(null);
	const [relatedVideos, setRelatedVideos] = useState<ResponseItem[] | null>(
		null
	);

	useEffect(() => {
		let mounted = true;

		if (mounted) {
			fetchDetailFromApi(
				`snippet,statistics&id=${videoId}`,
				'videos'
			).then((response) => setVideoDetail(response));
			fetchFromApi(
				`search?part=snippet&relatedToVideoId=${videoId}&type=video`
			).then((response) => setRelatedVideos(response));
		}
		return () => {
			mounted = false;
		};
	}, [videoId]);

	if (!videoDetail)
		return (
			<Box minH={'90vh'} bg={'#000'}>
				Loading...
			</Box>
		);
	const { id, snippet, statistics } = videoDetail;

	return (
		<Layout title={`Video || ${videoId}`} hideSideBar={true}>
			<Box p={2} height={'90vh'} overflowY={'auto'}>
				<Stack direction={{ base: 'column', md: 'row' }}>
					<Box flex={1}>
						<Box w={'100%'} position={'sticky'} top={'10px'}>
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${videoId}`}
								className='react-player'
							/>
							<Text fontWeight={'bold'} p={2}>
								{snippet.title}
							</Text>
							<HStack
								justifyContent={'space-between'}
								py={1}
								px={2}
							>
								<Link href={`/channel/${snippet.channelId}`}>
									<Center gap={1}>
										<Text>{snippet.channelTitle}</Text>
										<MdCheckCircle color='gray' />
									</Center>
								</Link>
								<HStack gap={5}>
									<Text fontSize={'sm'} opacity={'0.7'}>
										{parseInt(
											statistics.viewCount
										).toLocaleString()}{' '}
										views
									</Text>
									<Text fontSize={'sm'} opacity={'0.7'}>
										{parseInt(
											statistics.likeCount
										).toLocaleString()}{' '}
										likes
									</Text>
								</HStack>
							</HStack>
						</Box>
					</Box>
					{/* End of left side */}
					<Box
						px={2}
						py={{ base: 5, md: 1 }}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Videos data={relatedVideos} direction='column' />
					</Box>
				</Stack>
			</Box>
		</Layout>
	);
};

export default VideoDetail;
