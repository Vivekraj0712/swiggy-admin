import React from 'react';
import { useState } from 'react';
import { Modal, useDisclosure, Box, RadioGroup, Radio, Stack, ModalBody, ModalFooter, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
function CommonModal(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	;
    const {title,component,clickButton}=props
	return (
		<>
		<Button onClick={onOpen}>{clickButton}</Button>
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					{component}
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3}>
						Save
					</Button>
					<Button onClick={onClose}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
		</>
	);
}
export default CommonModal;
