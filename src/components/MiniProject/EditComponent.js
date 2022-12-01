import React from "react"
import {
    Box,  
    FormControl,    
    Input,
  } from "@chakra-ui/react";
const EditComponent=(props)=>{
   const {data,handleChange}=props   
    return(
        <Box style={{ display: "flex", gap: "0.5rem" }}>
        <FormControl onChange={handleChange}>          
          <Input
            id="title"
            value={data.title}           
          />
          <Input
            id="body"
            value={data.body}           
          />
        </FormControl>      
      </Box>
    )

}

export default EditComponent