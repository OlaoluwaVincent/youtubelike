import { ResponseItem } from '../interfaces';
import { Stack, Box, Flex } from '@chakra-ui/react';
import { VideoCard, ChannelCard } from './index';
type Props = {
	data: ResponseItem[];
};

const Videos = ({ data }: Props) => {
	return (
		<Stack px='10px'>
			<Flex
				flexWrap={'wrap'}
				justifyContent={{ base: 'center', sm: 'start' }}
				gap='2'
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
		</Stack>
	);
};

export default Videos;
