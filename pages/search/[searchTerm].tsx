import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { fetchFromApi } from '../../utils/fetchFromApi';
import Layout from '../../components/Layout';
import { Videos } from '../../components';
import { ResponseItem } from '../../interfaces/index';
import { useRouter } from 'next/router';

const SearchFeed = () => {
	const router = useRouter();
	const { searchTerm } = router.query;
	const [videos, setVideos] = useState<ResponseItem[]>([]);
	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data);
		});
	}, [searchTerm]);
	return (
		<Layout title={`results for ${searchTerm}`}>
			<Box p={2} height={'90vh'} overflowY={'auto'}>
				<Text
					marginBottom={2}
					fontWeight={'bold'}
					fontSize={{ base: '14px', md: '20px' }}
					alignItems={{ base: 'center', md: 'left' }}
				>
					Search Reuslts for: {searchTerm}{' '}
					<span style={{ color: '#f31503' }}>videos</span>
				</Text>
				{videos && <Videos data={videos} />}
			</Box>
		</Layout>
	);
};

export default SearchFeed;
