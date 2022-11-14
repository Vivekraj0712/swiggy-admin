import React from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react';

function CommonModal(props) {
	const { title, component, closeModal, style,className } = props;
	console.log({ title, component, closeModal, style,className });

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
					<Button colorScheme='blue' mr={3}>
						Save
					</Button>
					<Button onClick={handleCloseModal}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
export default CommonModal;
