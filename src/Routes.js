import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Dashboard from './routes/Dashboard/Dashboard';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dishes from './routes/Dishes/Dishes';
import Topmenu from './components/Topmenu';

const Routes = () => {
	return (
		<Box sx={{ position: 'relative' }}>
			<Topmenu />
			<VStack style={{ alignItems: 'stretch', overflow: 'hidden !important', justifyContent: 'stretch' }}>
				<ReactRoutes>
					<Route path='/' element={<Sidebar component={<Dishes />} />} />
					<Route path='/dashboard' element={<Sidebar component={<Dashboard />} />} />
				</ReactRoutes>
			</VStack>
		</Box>
	);
};

export default Routes;
