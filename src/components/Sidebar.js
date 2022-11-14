import React from 'react';
import { Square, Button } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import CommonModal from './CommonModal';
import DishModalContent from './DishModalContent';
import { useDispatch } from 'react-redux';
import { add_chapter } from '../redux/actions/Action';


const Sidebar = React.memo(() => {
	const navigate = useNavigate();	
	const navigateToPage=(e)=>{
     if(e.target.id==="orders"){
		navigate('/dashboard');
	 }
	 if(e.target.id==="dishes"){
		navigate('/dishes');
	}	 
}
    const title="Add New Dish"

	const dispatch = useDispatch();

	const manageAddRedux = () => {
		dispatch(add_chapter('vishal'));
	};

	return (
		<Square size='150px' sx={{ position: 'sticky', top: 0, left: 0 }}>
			<ul className='side-bar'>
				<button onClick={manageAddRedux}>ADd redux</button>
				<li>
					<Button id="orders" >Orders</Button>
				</li>
				<li >
					<Button style={{width:"100%"}} data-id="dishes" id="dishes">Dishes</Button>
				</li>
				<li >
					{/*<DishesModal />*/}
					<CommonModal style={{width:"100%"}} title={title} clickButton={title} component={<DishModalContent/>}/>
				</li>
			</ul>
		</Square>
	);
});
export default Sidebar;
