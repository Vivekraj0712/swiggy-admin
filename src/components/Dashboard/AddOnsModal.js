import React, { useState } from 'react';
import { Modal, useDisclosure, ModalBody, ModalFooter, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';

// {
//   showModal ?  <AddOnsModal /> : null
// }

// const AddDishes = () => {
// 	return <form></form>;
// };

// parent  dishes => add dishj =>modal => adddish
// CustomModal => AddDishes,..props

function CustomModal(props) {
	const { handleModalClose, childComponent } = props;
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		handleModalClose();
	};

	return (
		<Modal isOpen={open} onClose={handleClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create your account</ModalHeader>
				<ModalCloseButton onClick={handleClose} />
				<ModalBody pb={6}>{childComponent}</ModalBody>
			</ModalContent>
		</Modal>
	);
}
export default CustomModal;

// onClick =>dish table

// common Modal Component => props => title,childComponent,handleModalClose
// common Component => GenError

// GenError => props => isLoading,isfailed,childComponent =>
// if(isLoading)=> loader
// is(isfailed)=> Oops unable to get Data
// if everything is okay => childcomponent

// Monday => task 1 and task 2


//UI green =>gray
// all buttons must be similar