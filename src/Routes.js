import React from 'react';
import { VStack, Flex, Box } from '@chakra-ui/react';
import Dashboard from './routes/Dashboard/Dashboard';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dishes from './routes/Dishes/Dishes';
import Test from './Test';
import Topmenu from './components/Topmenu';

const Routes = () => {
	return (
		<Box sx={{ position: 'relative' }}>
			<Topmenu />
			<VStack style={{ alignItems: 'stretch', overflow: 'hidden !important' }}>
				<Flex>
					<Sidebar />
					<ReactRoutes>
						<Route path='/' element={<Dishes />} />
						<Route path='/dishes' element={<Dishes />} />
						<Route path='/dashboard' element={<Dashboard />} />
					</ReactRoutes>
				</Flex>
			</VStack>
		</Box>
	);
};

export default Routes;
