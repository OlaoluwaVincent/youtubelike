import { useEffect, useState } from 'react';
import {
	Box,
	Flex,
	Center,
	Stack,
	Text,
	Square,
	HStack,
	VStack,
	Button,
} from '@chakra-ui/react';
import { fetchFromApi } from '../utils/fetchFromApi';
import Layout from '../components/Layout';
import { SideBar, Videos } from '../components';
import { ResponseItem } from '../interfaces/index';

const IndexPage = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>('New');
	const [videos, setVideos] = useState<ResponseItem[]>([]);
	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(
			(data) => {
				setVideos(data);
			}
		);
	}, [selectedCategory]);

	return (
		<Layout title='Home | Next.js + TypeScript Example'>
			<Stack
				direction={{ base: 'column', md: 'row' }}
				transition={'ease-in 200ms'}
			>
				<Box
					height={{ base: 'auto', md: '92vh' }}
					borderRight={'1px solid #3d3d3d'}
					px={{ base: '0', md: '2' }}
					transition={'ease-in 200ms'}
				>
					<SideBar
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
					<p className='copyright'>copyright 2023 OlaoluwaDev</p>
				</Box>
				<Box p={2} height={'90vh'} overflowY={'auto'} flex={2}>
					<Text
						mb={2}
						fontWeight={'bold'}
						fontSize={{ base: '14px', md: '20px' }}
					>
						{selectedCategory}{' '}
						<span style={{ color: '#f31503' }}>videos</span>
					</Text>
					{videos && <Videos data={videos} />}
				</Box>
			</Stack>
		</Layout>
	);
};

export default IndexPage;
