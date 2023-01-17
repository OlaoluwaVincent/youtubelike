import React from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import { useRouter } from 'next/router';

type Props = {};

const SearchBar = (props: Props) => {
	const router = useRouter();
	const [value, setValue] = React.useState('');
	const handleChange = (event) => setValue(event.target.value);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (value) {
			router.push(`/search/${value}`);
			setValue('');
		}
	};

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit}
			color={'#000'}
			align={'center'}
			justify={'space-between'}
			width={{ base: '70%', md: '50%' }}
			height='max-content'
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
				aria-label='Search database'
				icon={<MdSearch />}
				isRound={true}
				type='submit'
			/>
		</Flex>
	);
};

export default SearchBar;
