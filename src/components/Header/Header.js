import React from 'react';
import {useState} from 'react';
import { Flex,VStack ,Box, Spacer, Button } from '@chakra-ui/react';
import CommonDrawer from '../CommonDrawer/CommonDrawer';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfilePanel } from './Header.component';
import "./Header.css";
const Header = () => {
	const [showDrawer,setShowDrawer]=useState(false);
	const closeDrawer = () => setShowDrawer(false);
	const openDrawer = () => setShowDrawer(true);
	const logo = '../../images/swiggy.png';
	return (
		<Flex sx={{ position: 'sticky', top: 0 ,backgroundColor:"gray"}}>
			<Link to="/">
			<Box p='4'>
				<img src={logo} style={{height:"2rem"}} className='logo' alt="swiggy-logo"/>
			</Box>
			</Link>
			<Spacer />
			<Box p='4' className="box-class" style={{zIndex:"10"}}>
				{/* <Link onClick={openDrawer}><FontAwesomeIcon className='font-' */}
				<FontAwesomeIcon  style={{fontSize:'2rem'}} className="font-awesome" title="My Profile" icon={faUser} /> 
			    <ProfilePanel/>
			{/* {showDrawer?<CommonDrawer closeDrawer={closeDrawer} title="My Profile" component={<ProfileModalContent/>}/>:null} */}
			</Box>
		</Flex>
	);
};

export default React.memo(Header);
