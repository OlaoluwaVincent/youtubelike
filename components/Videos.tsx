import { ResponseItem } from '../interfaces';
import { Stack, Box, Flex } from '@chakra-ui/react';
import { VideoCard, ChannelCard } from './index';
type Props = {
	data: ResponseItem[];
	direction?: 'row' | 'column';
};

const Videos = ({ data, direction }: Props) => {
	if (!data) return <Box minH={'90vh'}>Loading...</Box>;
	return (
		<Flex
			flexWrap={'wrap'}
			justifyContent={{ base: 'center', sm: 'flex-start' }}
			gap='2'
			direction={direction || 'row'}
		>
			{data.map((video, idx) => (
				<Box
					key={idx}
					minW={'270px'}
					w={'100%'}
					maxW={{ base: '100%', sm: '320px' }}
				>
					{video.id.videoId && <VideoCard video={video} />}
					{video.id.channelId && <ChannelCard channel={video} />}
				</Box>
			))}
		</Flex>
	);
};

export default Videos;
