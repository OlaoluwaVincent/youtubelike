import React from 'react';
import { Image, Flex, Center } from '@chakra-ui/react';
import { ChannelDetails, ResponseItem } from '../interfaces/index';
import { demoThumbnailUrl } from '../utils/constants';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

type Props = {
	channel?: ResponseItem;
	marginTop?: string;
	statistics?: string;
	data?: ChannelDetails;
};

const ChannelCard = ({ channel, marginTop }: Props) => {
	return (
		<Flex
			direction={'column'}
			align={'center'}
			justify={'center'}
			borderRadius={{ base: 0, md: 'md' }}
			color={'white'}
			height={{ base: '256px', sm: '286px' }}
			w={{ base: '90vw', sm: '320px' }}
			marginTop={marginTop}
		>
			<Link
				href={
					channel?.id?.channelId
						? `/channel/${channel.id.channelId}`
						: `/channel/${channel?.id}`
				}
			>
				<Image
					src={demoThumbnailUrl}
					alt={channel?.snippet?.title}
					objectFit={'cover'}
					h={{ base: '150px', sm: '180px' }}
					w={'180px'}
					border='1px solid #e3e3e3'
					sx={{
						borderRadius: '50%',
					}}
				/>
				<Link
					href={
						channel?.id?.channelId
							? `/channel/${channel.id.channelId}`
							: `/channel/${channel?.id}`
					}
				>
					<Center
						color={'#fff'}
						fontSize='sm'
						opacity={0.8}
						gap={1}
						mt={2}
					>
						{channel?.snippet.channelTitle ||
							channel?.snippet.title}
						<MdCheckCircle />
					</Center>
					<Center
						color={'#fff'}
						fontSize='sm'
						opacity={0.8}
						gap={1}
						mt={2}
					>
						{channel?.statistics?.subscriberCount &&
							parseInt(
								channel.statistics.subscriberCount
							).toLocaleString()}
					</Center>
				</Link>
			</Link>
		</Flex>
	);
};

export default ChannelCard;
