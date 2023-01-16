import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

type Props = {};

const SearchBar = (props: Props) => {
	const [value, setValue] = React.useState('');
	const handleChange = (event) => setValue(event.target.value);
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit}
			color={'#000'}
			align={'center'}
			justify={'space-between'}
			w={{ base: '70%', md: '50%' }}
			h='max-content'
			sx={{
				borderRadius: '20px',
				border: '1px solid #e3e3e3',
				pl: 2,
				bg: 'white',
			}}
		>
			<input
				className='search-bar'
				placeholder='search...'
				value={value}
				onChange={handleChange}
			/>

			<IconButton
				variant={'solid'}
				type='submit'
				aria-label='Search database'
				icon={<MdSearch />}
				borderRadius={'50%'}
			/>
		</Flex>
	);
};

export default SearchBar;
