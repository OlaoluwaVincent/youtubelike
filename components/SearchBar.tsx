import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

type Props = {};

const SearchBar = (props: Props) => {
	const [value, setValue] = React.useState('');
	const handleChange = (event) => setValue(event.target.value);
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Box
			as='form'
			onSubmit={handleSubmit}
			color={'#000'}
			overflow={'hidden'}
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
		</Box>
	);
};

export default SearchBar;
