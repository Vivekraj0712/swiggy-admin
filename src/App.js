import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes';

function App() {
	console.log('key', process.env.REACT_APP_AWS_KEY);
	return (
		<ChakraProvider>
			<Routes />
		</ChakraProvider>
	);
}

export default React.memo(App);
