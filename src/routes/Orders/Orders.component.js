import React from 'react';
import { useState,useRef } from 'react';
import {  Box, RadioGroup, Radio, Stack, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
export const OrderEditForm=(props)=>{
    const {data,change}=props	
    const [typeValue, setTypeValue] = useState(data.type==='Veg'?'1':'2');
    const [unitValue, setUnitValue] = useState(data.unit?data.unit.substr((data.unit.length - 4))==='unit'?'2':'1':null);
	const initialRef = useRef(null);
    return(
        <>
		<Box onChange={change}>
        <Box style={{ display: 'flex', gap: '0.5rem' }}>
				<FormControl>
					<Input ref={initialRef}  value={data.dish} placeholder='Name' />
				</FormControl>

				<FormControl>
					<Input placeholder='Price' value={data.price}/>
				</FormControl>
			</Box>
			<Box style={{ display: 'flex', gap: '0.5rem' }}>
				
				<FormControl>
					<Input placeholder='Location' value={data.location}/>
				</FormControl>
			</Box>
			
			
			</Box>
        </>
    )
}