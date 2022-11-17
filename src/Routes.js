import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Dashboard from './routes/Dashboard/Dashboard';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dishes from './routes/Dishes/Dishes';
import Header from './components/Header';
import Dropdown from './ReduxTest/components/Dropdown';
import Test from './ReduxTest/components/Test';
const Routes = () => {
	return (
		<Box sx={{ position: 'relative' }}>
			<Header />
			<VStack style={{ alignItems: 'stretch', overflow: 'hidden !important', justifyContent: 'stretch' }}>
				<ReactRoutes>
					<Route path='/dishes' element={<Sidebar component={<Dishes />} />} />
					<Route path='/' element={<Sidebar component={<Dashboard />} />} />
					<Route path='/redux/dropdown' element={<Dropdown />} />
					<Route path='/redux/test' element={<Test />} />
				</ReactRoutes>

			</VStack>
		</Box>
	);
};

export default Routes;
