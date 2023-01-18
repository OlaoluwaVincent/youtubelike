import Link from 'next/link';
// import Image from 'next/image';

import SearchBar from './SearchBar';

//
import { Image, GridItem, Flex } from '@chakra-ui/react';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<GridItem
			colSpan={12}
			alignItems={'center'}
			bg='#000'
			justifyContent={'space-between'}
			p={{ base: 2, md: 4 }}
			sx={{
				position: 'sticky',
				top: '0',
				justifyContent: 'space-between',
				zIndex: 1000,
			}}
		>
			<Flex justify={'space-between'}>
				<Link
					href={'/'}
					style={{ display: 'flex', alignItems: 'center' }}
				>
					<Image
						src='https://i.ibb.co/s9Qys2j/logo.png'
						alt='logo'
						h={{ base: '32px', md: '56px' }}
						w={{ base: '32px', md: '56px' }}
						transition={'ease-in 200ms'}
					/>
				</Link>

				<SearchBar />
			</Flex>
		</GridItem>
	);
};

export default Navbar;
