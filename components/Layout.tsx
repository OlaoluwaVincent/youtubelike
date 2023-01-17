import React, { Dispatch, ReactNode, SetStateAction, useContext } from 'react';
import Head from 'next/head';
// Components
import Navbar from './Navbar';

// UI
import { Box, Grid, GridItem } from '@chakra-ui/react';
import SideBar from './SideBar';
import { menuSelection } from '../context/layoutContext';
import { ResponseItem } from '../interfaces';

type Props = {
	children?: ReactNode;
	title?: string;
	hideSideBar?: boolean;
};

interface Context {
	selectedCategory: string;
	videos: ResponseItem[];
	setSelectedCategory: Dispatch<SetStateAction<string>>;
	setVideos: Dispatch<SetStateAction<ResponseItem[]>>;
}

const Layout = ({ children, title = 'YouTube clone', hideSideBar }: Props) => {
	const { selectedCategory, setSelectedCategory, videos, setVideos } =
		useContext(menuSelection) as Context;

	return (
		<Box sx={{ backgroundColor: '#000', color: 'white' }}>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
			</Head>
			<Grid templateColumns={'repeat(12,1fr)'}>
				<Navbar />
			</Grid>
			{/* Main content */}
			<Grid gridTemplateColumns={'repeat(12,1fr)'}>
				<GridItem
					display={hideSideBar ? 'none' : 'block'}
					colSpan={hideSideBar ? 'auto' : { base: 12, md: 3 }}
				>
					<Box
						height={{ base: 'auto', md: '92vh' }}
						borderRight={'1px solid #3d3d3d'}
						px={{ base: '0', md: '2' }}
					>
						<SideBar
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
						<p className='copyright'>copyright 2023 OlaoluwaDev</p>
					</Box>
					{/* sidebar end */}
				</GridItem>
				<GridItem colSpan={hideSideBar ? 12 : { base: 12, md: 9 }}>
					{children}
				</GridItem>
			</Grid>
		</Box>
	);
};

export default Layout;
