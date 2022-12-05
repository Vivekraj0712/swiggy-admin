import React from "react"
import {  Box, RadioGroup, Radio, Stack, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState, useRef } from 'react';
export const AddNewDish=(props)=>{
    const {openDrawer}=props
    return(
        <Button onClick={openDrawer} colorScheme="blue" style={{marginTop:"1em",zIndex:"9",alignSelf:"flex-end"}}>
            New Dish +
        </Button>
    )
}

export const DishesNewForm=()=>{
    const [typeValue, setTypeValue] = useState('1');
    const [unitValue, setUnitValue] = useState('1');
	const initialRef = useRef(null);	
    return(
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
					<RadioGroup name="type" onChange={setTypeValue} value={typeValue}>
						<Stack direction='row'>
							<Radio value='1'>Veg</Radio>
							<Radio value='2'>Non-Veg</Radio>
						</Stack>
					</RadioGroup>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Unit Type</FormLabel>
					<RadioGroup name="unit" onChange={setUnitValue} value={unitValue}>
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
    
    )
}

export const DishesEditForm=(props)=>{
    const {data,change}=props	
    const [typeValue, setTypeValue] = useState(data.type==='Veg'?'1':'2');
    const [unitValue, setUnitValue] = useState(data.unit?data.unit.substr((data.unit.length - 4))==='unit'?'2':'1':null);
	const initialRef = useRef(null);
    return(
        <>
		<Box onChange={change}>
        <Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl>
					<Input ref={initialRef}  value={data.itemName} placeholder='Name' />
				</FormControl>

				<FormControl>
					<Input placeholder='Cost Price' value={data.costPrice}/>
				</FormControl>
			</Box>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl>
					<Input placeholder='Selling Price' value={data.sellingPrice}/>
				</FormControl>
				<FormControl>
					<Input placeholder='Cuisine' value={data.cuisine}/>
				</FormControl>
			</Box>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl mt={4}>
					<FormLabel>Type</FormLabel>
					<RadioGroup name="type" onChange={setTypeValue} value={typeValue}>
						<Stack direction='row'>
							<Radio value='1' >Veg</Radio>
							<Radio value='2' defaultChecked>Non-Veg</Radio>
						</Stack>
					</RadioGroup>
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Unit Type</FormLabel>
					<RadioGroup name="unit" onChange={setUnitValue} value={unitValue}>
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
					<Input placeholder='Preparation Time' value={data.preparationTime}/>
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Add Ons</FormLabel>
					<Input placeholder='Add Ons' value={data.addOns}/>
				</FormControl>
			</Box>

			<FormControl mt={4}>
				<FormLabel>Image</FormLabel>
				<Input type='file' placeholder='Image' />
			</FormControl>
			</Box>
        </>
    )
}