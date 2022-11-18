import React, { useEffect, useRef } from "react";
import {useState} from "react"
import { edit_chapters } from "../../redux/actions/Action";
import { Box, RadioGroup,Button, Radio, Stack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
const EditChapterComponent=(props)=>{
    const valref=useRef()
    const {chapter}=props
    const [value,setValue]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e)=>{
     setValue(e.target.value)
    }
    useEffect(()=>{
     valref.current.value=chapter[1];
    },[])    

    const handleClick=()=>{
      dispatch(edit_chapters(chapter[0],value))
    }
    return(
    <>
        <Box style={{ display: 'flex', gap: '0.5rem' }}>
						<FormControl>
							<FormLabel>Chapter Name</FormLabel>
							<Input ref={valref} placeholder="Enter Chapter Name" onChange={handleChange}  />
						</FormControl>
                        <Button colorScheme='blue' onClick={handleClick} mr={3}>
						Save
					</Button>
                        

		</Box>
        </>
    )
}

export default EditChapterComponent