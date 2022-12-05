import React from "react"
import { VStack,Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProfilePanel=()=>{
    return(
        <Box p={5} className="hover-class" >
        <VStack>
            <Box style={{cursor:"pointer"}}>
            <Link to="/login">Logout</Link>
            </Box>
            <Box style={{whiteSpace:"nowrap",cursor:"pointer"}}>
            <Link  to="/profile" className="link-class">Edit Profile</Link>
            </Box>
        </VStack>
            
        </Box>
    )
}