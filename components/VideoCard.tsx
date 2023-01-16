import React from 'react';
import Link from 'next/link';
import { ResponseItem } from '../interfaces';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import {
	demoVideoTitle,
	demoVideoUrl,
	demoChannelTitle,
} from '../utils/constants';

type Props = {
	video: ResponseItem;
};
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}: Props) => {
	return (
		<Flex direction={'column'} borderRadius={{ base: 0, md: 'md' }}>
			<Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<Box>
					<Image
						src={snippet.thumbnails.high.url}
						alt={snippet.title}
						objectFit={'cover'}
						h={{ base: '150px', sm: '180px' }}
						w={'100%'}
					/>
				</Box>
				<Box bg='#1e1e1e' h='106px' p='10px' w='100%'>
					<Text
						color={'#fff'}
						fontSize={{ base: 'sm', md: 'md', lg: '1xl' }}
					>
						{snippet.title.slice(0, 60) ||
							demoVideoTitle.slice(0, 60)}
					</Text>
					<Link href={videoId ? `/channel/${videoId}` : demoVideoUrl}>
						<Text
							color={'#fff'}
							fontSize='sm'
							opacity={0.8}
							display='flex'
							alignItems='center'
							gap={1}
						>
							{snippet.channelTitle || demoChannelTitle}
							<MdCheckCircle />
						</Text>
					</Link>
				</Box>
			</Link>
		</Flex>
	);
};

export default VideoCard;
