import react from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import ProfileModal from './ProfileModal';

const Topmenu = () => {
	const logo = 'https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png';
	return (
		<Flex bg='teal.100' sx={{ position: 'sticky', top: 0 }}>
			<Box p='4'>
				<img src={logo} className='logo' />
			</Box>
			<Spacer />
			<Box p='4'>
				<ProfileModal />
			</Box>
		</Flex>
	);
};

export default Topmenu;
