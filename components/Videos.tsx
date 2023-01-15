import React, { Dispatch, SetStateAction } from 'react';
import { ResponseItem } from '../interfaces';
import { Stack, Box, Flex } from '@chakra-ui/react';
import { VideoCard, ChannelCard } from './index';
type Props = {
	setVideos: Dispatch<SetStateAction<ResponseItem[]>>;
	data: ResponseItem[];
};

const Videos = ({ setVideos, data }: Props) => {
	return (
		<Stack px='10px'>
			<Flex
				flexWrap={'wrap'}
				justifyContent={{ base: 'center', sm: 'start' }}
				gap={2}
			>
				{data.map((video, idx) => (
					<Box key={idx}>
						{video.id.videoId && <VideoCard video={video} />}
						{video.id.channelId && <ChannelCard channel={video} />}
					</Box>
				))}
			</Flex>
		</Stack>
	);
};

export default Videos;
