// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/global.css';
import { LayoutContext } from '../context/layoutContext';

function MyApp({ Component, pageProps }) {
	return (
		<LayoutContext>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</LayoutContext>
	);
}

export default MyApp;
