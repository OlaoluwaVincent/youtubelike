import { Text } from '@chakra-ui/react';
import React from 'react';
import { Layout } from '../../components';

type Props = {};

const SearchFeed = (props: Props) => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<Text as={'p'}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
			SearchFeed!
		</Text>
	</Layout>
);

export default SearchFeed;
