import React from "react"
import { 
    Stack,
    Box
 } from "@chakra-ui/react"
 import { Link } from "react-router-dom"
const Dashboard=()=>{
    return(
        <Stack direction={['column', 'row']} spacing='24px' style={{margin:"auto"}}>
  <Link to="/orders">
  <Box w='100px' p={4} h='90px' bg='yellow.200' style={{border:"1px solid gray",fontWeight:"bold",fontSize:"1rem",borderRadius:"15px"}}>
    My Orders
  </Box>
  </Link>
  <Link to="/dishes">
  <Box w='100px' p={4} h='90px' bg='blue.200' style={{border:"1px solid gray",fontWeight:"bold",fontSize:"1rem",borderRadius:"15px"}}>
    My Dishes
  </Box>
  </Link>
  <Link to="addons">
  <Box w='100px' p={4} h='90px' bg='red.200' style={{border:"1px solid gray",fontWeight:"bold",fontSize:"1rem",borderRadius:"15px"}}>
    My AddOns
  </Box>
  </Link>
  <Link to="/profile">
  <Box w='100px' p={4} h='90px' bg='green.400' style={{border:"1px solid gray",fontWeight:"bold",fontSize:"1rem",borderRadius:"15px"}}>
  My Profile  
  </Box>
  </Link>
  </Stack>
    )
}
export default Dashboard