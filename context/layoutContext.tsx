import {
	useState,
	createContext,
	useEffect,
	Dispatch,
	SetStateAction,
} from 'react';
import { ResponseItem } from '../interfaces';
import { fetchFromApi } from '../utils/fetchFromApi';

type Props = {
	selectedCategory: string;
	videos: ResponseItem[];
	setSelectedCategory: Dispatch<SetStateAction<string>>;
	setVideos: Dispatch<SetStateAction<ResponseItem[]>>;
};

const menuSelection = createContext<Props | null>(null);

const LayoutContext = ({ children }: any) => {
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
		<menuSelection.Provider
			value={{
				selectedCategory,
				videos,
				setSelectedCategory,
				setVideos,
			}}
		>
			{children}
		</menuSelection.Provider>
	);
};

export { menuSelection, LayoutContext };
