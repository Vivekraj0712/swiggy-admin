import React from 'react'
import {VStack,Button, FormControl,FormHelperText,Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Login=()=>{
    return(
    <VStack w="40%" style={{margin:"0.5em auto"}}>
     <FormControl isRequired as='fieldset' style={{ display: 'flex',flexDirection:"column" ,gap: '1rem' }}>
      
      <Input placeholder='Username' />
      <Input placeholder='Password' type="password" />
      <Button colorScheme='blue'>Login</Button>
      <FormHelperText>New User? <Link to="/signup" style={{color:"blue",textDecoration:"underline"}}>Sign Up</Link></FormHelperText>
     </FormControl>
  </VStack>
    )
}

export default Login