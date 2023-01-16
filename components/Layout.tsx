import React, { ReactNode } from 'react';
import Head from 'next/head';
// Components
import Navbar from './Navbar';

// UI
import { Box, Grid } from '@chakra-ui/react';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'YouTube clone' }: Props) => (
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
		<Grid gridTemplateColumns={'repeat(12,1fr)'}>{children}</Grid>
	</Box>
);

export default Layout;
