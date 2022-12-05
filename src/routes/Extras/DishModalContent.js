import React from 'react';
import { Modal, useDisclosure, Box, RadioGroup, Radio, Stack, ModalBody, ModalFooter, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState, useRef } from 'react';

const DishModalContent = () => {
	const [value, setValue] = useState('1');
	const initialRef = useRef(null);
	const finalRef = useRef(null);

	return (
		<>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl>
					<Input ref={initialRef} placeholder='Name' />
				</FormControl>

				<FormControl>
					<Input placeholder='Cost Price' />
				</FormControl>
			</Box>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl>
					<Input placeholder='Selling Price' />
				</FormControl>
				<FormControl>
					<Input placeholder='Cuisine' />
				</FormControl>
			</Box>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl mt={4}>
					<FormLabel>Type</FormLabel>
					<RadioGroup onChange={setValue} value={value}>
						<Stack direction='row'>
							<Radio value='1'>Veg</Radio>
							<Radio value='2'>Non-Veg</Radio>
						</Stack>
					</RadioGroup>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Unit Type</FormLabel>
					<RadioGroup onChange={setValue} value={value}>
						<Stack direction='row'>
							<Radio value='1'>Kg</Radio>
							<Radio value='2'>Unit Wise</Radio>
						</Stack>
					</RadioGroup>
				</FormControl>
			</Box>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl mt={4}>
					<FormLabel>Preparation Time</FormLabel>
					<Input placeholder='Preparation Time' />
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Add Ons</FormLabel>
					<Input placeholder='Add Ons' />
				</FormControl>
			</Box>

			<FormControl mt={4}>
				<FormLabel>Image</FormLabel>
				<Input type='file' placeholder='Image' />
			</FormControl>
		</>
	);
};
export default React.memo(DishModalContent);
