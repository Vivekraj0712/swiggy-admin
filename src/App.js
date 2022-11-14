import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Topmenu from './components/Topmenu';
import Routes from './Routes';

function App() {
	return (
		<ChakraProvider>
			<Routes />
		</ChakraProvider>
	);
}

export default App;
