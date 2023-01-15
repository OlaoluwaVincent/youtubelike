import React from 'react';
import Link from 'next/link';
import { ResponseItem } from '../interfaces';
import { Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
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
		<Card
			borderRadius={{ base: 'sm', md: 'lg' }}
			w={{ base: '90vw', sm: '320px' }}
			overflow='hidden'
			bg={'transparent'}
		>
			<Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardBody p={0}>
					<Image
						src={snippet.thumbnails.high.url}
						alt={snippet.title}
						objectFit={'cover'}
						h={{ base: '150px', sm: '180px' }}
						sx={{ width: { base: '90vw', sm: '320px' } }}
					/>
				</CardBody>
				<CardFooter
					bg='#1e1e1e'
					h='106px'
					flexDirection={'column'}
					p='10px'
					sx={{ width: { base: '90vw', sm: '320px' } }}
				>
					<Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
						<Text
							color={'#fff'}
							fontSize={{ base: 'sm', md: 'md', lg: '1xl' }}
						>
							{snippet.title.slice(0, 60) ||
								demoVideoTitle.slice(0, 60)}
						</Text>
					</Link>
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
				</CardFooter>
			</Link>
		</Card>
	);
};

export default VideoCard;
