import React from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';

function CommonModal(props) {
	const {successCallBack, title, component, closeModal, style,className } = props;
	console.log("PROPSSSS",{ title,successCallBack, component, closeModal, style,className });

	const [showModal, setShowModal] = useState(true);

	const handleCloseModal = () => {
		closeModal();
		setShowModal(false);
	};

	return (
		<Modal className={className} style={style} isOpen={showModal} onClose={handleCloseModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton onClick={handleCloseModal} />
				<ModalBody pb={6}>{component}</ModalBody>
				<ModalFooter>
				<Button colorScheme="blue" onClick={successCallBack} mr={3}>
        Save
      </Button>
					<Button onClick={handleCloseModal}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
export default React.memo(CommonModal);
