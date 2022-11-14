import React, { useState } from 'react';
import { Square, Button } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_chapter } from '../redux/actions/Action';
import CommonModal from '../components/CommonModal';
import DishModalContent from '../routes/Dashboard/DishModalContent';

const Sidebar = React.memo((props) => {
	const { component } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => setShowModal(false);
	const openModal = () => setShowModal(true);

	const navigateToPage = (e) => {
		navigate(e.target.id);
		// if (e.target.id === 'orders') {
		// 	navigate('/dashboard');
		// }
		// if (e.target.id === 'dishes') {
		// 	navigate('/dishes');
		// }
	};

	const manageAddRedux = () => {
		dispatch(add_chapter('vishal'));
	};

	// left code: position fixed
	// right code : scrollable

	// style => html components

	return (
		<Square size='150px' sx={{ position: 'sticky', top: 0, left: 0 }}>
			<ul className='side-bar'>
				<button onClick={manageAddRedux}>ADd redux</button>
				<li>
					<Button id='dashboard'>Orders</Button>
				</li>
				<li>
					<Button style={{ width: '100%' }} id='dishes'>
						Dishes
					</Button>
				</li>
				<button onClick={openModal}>showModal </button>
			</ul>

			{showModal ? <CommonModal closeModal={closeModal} title={'Add New Dish'} component={<DishModalContent />} /> : null}
		</Square>
	);
});
export default Sidebar;
