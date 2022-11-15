import React from 'react';
import {useState} from 'react';
import { Flex, Box, Spacer, Button } from '@chakra-ui/react';
import ProfileModalContent from './ProfileModalContent';
import CommonDrawer from './CommonDrawer/CommonDrawer';
const Header = () => {
	const [showDrawer,setShowDrawer]=useState(false);
	const closeDrawer = () => setShowDrawer(false);
	const openDrawer = () => setShowDrawer(true);
	const logo = 'https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png';
	return (
		<Flex bg='teal.100' sx={{ position: 'sticky', top: 0 }}>
			<Box p='4'>
				<img src={logo} className='logo' />
			</Box>
			<Spacer />
			<Box p='4'>
				<Button onClick={openDrawer}>My Profile</Button>
			{showDrawer?<CommonDrawer closeDrawer={closeDrawer} title="My Profile" component={<ProfileModalContent/>}/>:null}
			</Box>
		</Flex>
	);
};

export default React.memo(Header);
