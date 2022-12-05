import React from "react";
import {useState} from "react"
import { Box,Button, RadioGroup,HStack,FormHelperText ,Radio, Stack, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const Profile=()=>{
    const [value, setValue] = useState('1');
    return(
        <>
        <VStack w="60%" p={5} style={{margin:"0.5em auto"}}>
        <FormControl as='fieldset' style={{ display: 'flex',flexDirection:"column" ,gap: '1rem' }}>
        <FormLabel as='legend' style={{fontWeight:"bold"}}>Edit Your Profile</FormLabel>
        <Box>
         
        <Input placeholder='Name' value="Vivek"/>
        </Box>
        <Box>
        
        <Input placeholder='Location' value="Noida"/>
        </Box>
        <Box>
        
        <Input placeholder='PAN' value="AX32REDF"/>
        </Box>
        <Box>
        
        <Input placeholder='Rating' value="5"/>
        </Box>
        <Box>
        
        <Input placeholder='Cuisine' value="Italian"/>
        </Box>
        <Box>
        
        <Input placeholder='Cost of Two' value="Rs. 350"/>
        </Box>
        <Box>
        
        <Input placeholder='Average Delivery Time' value="20 mins"/>
        </Box>
        <Box>
        <RadioGroup onChange={setValue} value={value}>
							<Stack direction='row' >
								<Radio value='1'>Veg</Radio>
								<Radio value='2'>Non-Veg</Radio>
								<Radio value='3'>Both</Radio>
							</Stack>
		</RadioGroup>
        </Box>
        <Box>
        <Stack direction='row' style={{justifyContent:"center"}}> 
        <Button colorScheme='blue'>Save</Button>                   
         <Button variant='outline' mr={3} >Reset</Button>
            
             </Stack>
             </Box>
  {/* <RadioGroup defaultValue='Itachi'>
    <HStack spacing='24px'>
      <Radio value='Sasuke'>Sasuke</Radio>
      <Radio value='Nagato'>Nagato</Radio>
      <Radio value='Itachi'>Itachi</Radio>
      <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
    </HStack> 
  </RadioGroup>*/}  
{/* <Input type='email' /> */}
     </FormControl>
     </VStack>
	        </>
    )
}

export default React.memo(Profile);