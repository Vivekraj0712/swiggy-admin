import React from 'react';
import { Square, Button } from '@chakra-ui/react';
import DishesModal from './DishesModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_chapter } from '../redux/actions/Action';


const Sidebar = React.memo(() => {
	const navigate = useNavigate();
	const navigateToDashboard = () => navigate('/dashboard');
	const navigateToDishes = () => navigate('/dishes');

	const dispatch = useDispatch();

	const manageAddRedux = () => {
		dispatch(add_chapter('vishal'));
	};

	return (
		<Square size='150px' sx={{ position: 'sticky', top: 0, left: 0 }}>
			<ul className='side-bar'>
				<button onClick={manageAddRedux}>ADd redux</button>
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
