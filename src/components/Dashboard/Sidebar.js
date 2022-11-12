import React from 'react';
import { Square, Button } from '@chakra-ui/react';
import DishesModal from './DishesModal';
import { useNavigate } from 'react-router-dom';

const Sidebar = React.memo(() => {
	const navigate = useNavigate();
	const navigateToDashboard = () => navigate('/dashboard');
	const navigateToDishes = () => navigate('/dishes');

	return (
		<Square size='150px'>
			<ul className='side-bar'>
				<li>
					<Button onClick={navigateToDashboard}>Orders</Button>
				</li>
				<li>
					<Button onClick={navigateToDishes}>Dishes</Button>
				</li>
				<li>
					<DishesModal />
				</li>
			</ul>
		</Square>
	);
});
export default Sidebar;
