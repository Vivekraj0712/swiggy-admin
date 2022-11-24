import React, { lazy, Suspense, useState } from 'react';
import { Square, Button, Flex } from '@chakra-ui/react';
// import CommonDrawer from './CommonDrawer/CommonDrawer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add_chapter } from '../redux/actions/Action';
import DishModalContent from '../routes/Dashboard/DishModalContent';
import { PageLoader } from '../Routes';

const CommonDrawer = lazy(() => import('./CommonDrawer/CommonDrawer'));

const Sidebar = React.memo((props) => {
	const { component } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showDrawer, setShowDrawer] = useState(false);
	const closeDrawer = () => setShowDrawer(false);
	const openDrawer = () => setShowDrawer(true);

	const navigateToPage = (e) => {
		e.target.id === 'dishes' ? navigate('/dishes') : navigate('/' + e.target.id);
	};

	const manageAddRedux = () => {
		dispatch(add_chapter('vishal'));
	};
	// left code: position fixed
	// right code : scrollable

	// style => html components

	return (
		<Flex>
			<Square style={{ alignSelf: 'flex-start', position: 'sticky', top: '80px', left: '0' }}>
				<ul className='side-bar' onClick={navigateToPage}>
					{/*<button onClick={manageAddRedux}>Add redux</button>*/}
					<li>
						<Button style={{ width: '100%' }} id='dashboard'>
							Orders
						</Button>
					</li>
					<li>
						<Button style={{ width: '100%' }} id='dishes'>
							Dishes
						</Button>
					</li>
					<Button style={{ width: '100%' }} onClick={openDrawer}>
						Add New Dish
					</Button>
				</ul>
				{showDrawer ? (
					<Suspense fallback={<PageLoader />}>
						<CommonDrawer closeDrawer={closeDrawer} title={'Add New Dish'} component={<DishModalContent />} />
					</Suspense>
				) : null}
			</Square>
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
