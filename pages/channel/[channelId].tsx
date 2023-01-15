import { Text } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../../components';

type Props = {};

const ChannelDetail = (props: Props) => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<Text as={'p'}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
			channel!
		</Text>
	</Layout>
);

export default ChannelDetail;
