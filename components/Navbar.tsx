import Link from 'next/link';
// import Image from 'next/image';
import SearchBar from './SearchBar';

//
import { Stack, Image } from '@chakra-ui/react';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			bg='#000'
			p={{ base: 3, md: 10 }}
			sx={{
				position: 'sticky',
				top: '0',
				justifyContent: 'space-between',
				zIndex: 1000,
			}}
		>
			<Link href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
				<Image
					src='https://i.ibb.co/s9Qys2j/logo.png'
					alt='logo'
					h={{ base: '32px', md: '56px' }}
					w={{ base: '32px', md: '56px' }}
					transition={'ease-in 200ms'}
				/>
			</Link>

			<SearchBar />
		</Stack>
	);
};

export default Navbar;
