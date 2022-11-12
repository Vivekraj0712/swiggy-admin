import React from 'react';
import { useState } from 'react';
import { Modal, useDisclosure, Box, RadioGroup, Radio, Stack, ModalBody, ModalFooter, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
function ProfileModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [value, setValue] = useState('1');

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>My Profile</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Box style={{ display: 'flex', gap: '0.5rem' }}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input placeholder='Name' />
						</FormControl>

						<FormControl>
							<FormLabel>Location</FormLabel>
							<Input placeholder='Location' />
						</FormControl>
					</Box>
					<Box style={{ display: 'flex', gap: '0.5rem' }}>
						<FormControl mt={4}>
							<FormLabel>PAN</FormLabel>
							<Input placeholder='PAN' />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Rating</FormLabel>
							<Input placeholder='Rating' />
						</FormControl>
					</Box>
					<Box style={{ display: 'flex', gap: '0.5rem' }}>
						<FormControl mt={4}>
							<FormLabel>Cuisine</FormLabel>
							<Input placeholder='Cuisine' />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Cost of Two</FormLabel>
							<Input placeholder='Cost of Two' />
						</FormControl>
					</Box>
					<FormControl mt={4}>
						<FormLabel>Average Delivery Time</FormLabel>
						<Input placeholder='Average Delivery Time' />
					</FormControl>

					<FormControl mt={4}>
						<RadioGroup onChange={setValue} value={value}>
							<Stack direction='row'>
								<Radio value='1'>Veg</Radio>
								<Radio value='2'>Non-Veg</Radio>
								<Radio value='3'>Both</Radio>
							</Stack>
						</RadioGroup>
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3}>
						Save
					</Button>
					<Button onClick={onClose}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
export default ProfileModal;
