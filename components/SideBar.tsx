import { SetStateAction } from 'react';
import { categories } from '../utils/constants';
import { Stack } from '@chakra-ui/react';

type Props = {
	setSelectedCategory: React.Dispatch<SetStateAction<string>>;
	selectedCategory: string;
};

const SideBar = ({ selectedCategory, setSelectedCategory }: Props) => {
	return (
		<Stack
			overflowX='auto'
			gap={2}
			height={{ base: 'auto', md: '88%' }}
			flexDirection={{ base: 'row', md: 'column' }}
		>
			{categories.map((category) => (
				<button
					key={category.name}
					className='category-btn'
					onClick={() => setSelectedCategory(category.name)}
					style={{
						background:
							category.name.toLocaleLowerCase() ===
								selectedCategory.toLocaleLowerCase() &&
							'#fc1503',
					}}
				>
					<span
						style={{
							color:
								category.name.toLocaleLowerCase() ===
								selectedCategory.toLocaleLowerCase()
									? 'white'
									: '#fc1503',
							marginRight: '15px',
						}}
					>
						{category.icon}
					</span>
					<span
						style={{
							opacity:
								category.name.toLocaleLowerCase() ===
								selectedCategory.toLocaleLowerCase()
									? '1'
									: '0.8',
						}}
					>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	);
};

export default SideBar;
