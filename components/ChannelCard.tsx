import React from 'react';
import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Text,
	Box,
	Flex,
	Center,
} from '@chakra-ui/react';
import { ResponseItem } from '../interfaces/index';
import {
	demoThumbnailUrl,
	demoVideoTitle,
	demoVideoUrl,
	demoChannelTitle,
	demoChannelUrl,
	demoProfilePicture,
} from '../utils/constants';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

type Props = {
	channel: ResponseItem;
};

const ChannelCard = ({
	channel: {
		id: { channelId },
		snippet,
	},
}: Props) => {
	return (
		<Flex
			direction={'column'}
			align={'center'}
			justify={'space-around'}
			borderRadius={{ base: 0, md: 'md' }}
			color={'white'}
			height={{ base: '256px', sm: '286px' }}
			w={{ base: '90vw', sm: '320px' }}
		>
			<Link href={`/channel/${channelId}`}>
				<Image
					src={demoThumbnailUrl}
					alt={snippet.title}
					objectFit={'cover'}
					h={{ base: '150px', sm: '180px' }}
					w={'180px'}
					border='1px solid #e3e3e3'
					sx={{
						borderRadius: '50%',
					}}
				/>
				<Link href={channelId ? `/channel/${channelId}` : demoVideoUrl}>
					<Center
						color={'#fff'}
						fontSize='sm'
						opacity={0.8}
						gap={1}
						mt={2}
					>
						{snippet.channelTitle || demoChannelTitle}
						<MdCheckCircle />
					</Center>
				</Link>
			</Link>
		</Flex>
	);
};

export default ChannelCard;
