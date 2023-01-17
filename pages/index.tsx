import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { Videos } from '../components';
import { ResponseItem } from '../interfaces/index';
import { menuSelection } from '../context/layoutContext';

interface Context {
	selectedCategory: string;
	videos: ResponseItem[];
}

const IndexPage = () => {
	const { selectedCategory, videos } = useContext(menuSelection) as Context;

	return (
		<Layout title='Homepage'>
			<Box p={2} height={'90vh'} overflowY={'auto'}>
				<Text
					mb={2}
					fontWeight={'bold'}
					fontSize={{ base: '14px', md: '20px' }}
					align={{ base: 'center', md: 'left' }}
				>
					{selectedCategory}{' '}
					<span style={{ color: '#f31503' }}>videos</span>
				</Text>
				{videos && <Videos data={videos} />}
			</Box>
		</Layout>
	);
};

export default IndexPage;
