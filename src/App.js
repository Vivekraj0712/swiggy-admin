import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Dishes from './components/Dashboard/Dishes';
import Test from './Test';
import Topmenu from './components/Dashboard/Topmenu';
import useAuth from './custom/useAuth';

function App() {
	const [userId, setUserID] = useAuth();
	console.log({ userId, setUserID });

	setUserID("vishal")
	return (
		<ChakraProvider>
			<Topmenu />
			<Routes>
				<Route path='/' element={<Test />} />
				<Route path='/dishes' element={<Dishes />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
