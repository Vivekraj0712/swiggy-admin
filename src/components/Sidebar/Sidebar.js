import React, { lazy, Suspense, useState } from 'react';
import { Flex,List,ListItem, Box } from '@chakra-ui/react';
// import CommonDrawer from './CommonDrawer/CommonDrawer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { add_chapter } from '../redux/actions/Action';
//import DishModalContent from '../../routes/Dashboard/DishModalContent';
import { PageLoader } from '../../Routes';
import { Link } from 'react-router-dom';
import { faBell,faCircle,faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from '../../designSystem/colors';

const CommonDrawer = lazy(() => import('../CommonDrawer/CommonDrawer'));

const Sidebar = React.memo((props) => {
	const { component } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showDrawer, setShowDrawer] = useState(false);
	const closeDrawer = () => setShowDrawer(false);
	const openDrawer = () => setShowDrawer(true);
	
	return (
		<Flex>
			<Box style={{ alignSelf: 'flex-start',position: 'sticky', top: '80px', left: '40px' ,width:"10%" }}>
				
					<List spacing={4} style={{fontSize:"1rem"}}>
							<ListItem>								
							<Link to="/orders" >
						      <FontAwesomeIcon  className="font-awesome" title="Orders" icon={faBell} /> 
						    </Link>
							</ListItem>
							<ListItem>
							<Link to="/dishes">
						       <FontAwesomeIcon className="font-awesome" title="Dishes" icon={faCircle} />						     </Link>							
							</ListItem>
							<ListItem>								
							<Link to="/addons">
						      <FontAwesomeIcon className="font-awesome" title="Add-Ons" icon={faPlusSquare} />
						    </Link>
							</ListItem>

					{/* <Button style={{ width: '100%' }} onClick={openDrawer}>
						Add New Dish
					</Button> */}
				</List>
				{showDrawer ? (
					<Suspense fallback={<PageLoader />}>
						{/* <CommonDrawer closeDrawer={closeDrawer} title={'Add New Dish'} component={<DishModalContent />} /> */}
					</Suspense>
				) : null}
			</Box>
			{component}
		</Flex>
	);
});
export default React.memo(Sidebar);

// function delayForDemo(promise) {
// 	return new Promise(resolve => {
// 	  setTimeout(resolve, 2000);
// 	}).then(() => promise);
//   }
