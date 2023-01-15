import { Text } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../../components';

type Props = {};

const VideoDetail = (props: Props) => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<Text as={'p'}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
			quisquam!
		</Text>
	</Layout>
);

export default VideoDetail;
