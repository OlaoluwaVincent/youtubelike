import React from 'react';
import { Card, CardBody, CardFooter, Image, Text, Box } from '@chakra-ui/react';
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
		<Box
			borderRadius='20px'
			color={'white'}
			bg={'#1e1e1e'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={'326px'}
			w={{ base: '90vw', sm: '320px' }}
		>
			<Link href={`/channel/${channelId}`}>
				<Card
					overflow={'hidden'}
					bg='transparent'
					display={'flex'}
					justifyContent={'center'}
					flexDirection={'column'}
					textAlign={'center'}
					shadow={0}
				>
					<CardBody p={0}>
						<Image
							src={demoProfilePicture}
							alt={snippet.title}
							objectFit={'cover'}
							h={{ base: '150px', sm: '180px' }}
							w={'180px'}
							border='1px solid #e3e3e3'
							sx={{
								borderRadius: '50%',
							}}
						/>
					</CardBody>
					<CardFooter
						p='10px'
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Link
							href={
								channelId
									? `/channel/${channelId}`
									: demoVideoUrl
							}
						>
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
				</Card>
			</Link>
		</Box>
	);
};

export default ChannelCard;
