import React from 'react';
import { Square, Button } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import CommonModal from './CommonModal';
import DishModalContent from './DishModalContent';

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

	return (
		<Square size='150px'>
			<ul className='side-bar' style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}    onClick={navigateToPage}>
				<li x>
					<Button style={{width:"100%"}} data-id="orders" id="orders">Orders</Button>
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
