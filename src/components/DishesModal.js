import React from "react"
import { Modal,useDisclosure,Box,RadioGroup,Radio,Stack,ModalBody,ModalFooter,Button,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,FormControl,FormLabel,Input } from "@chakra-ui/react"
import {useState} from "react";
function DishesModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState('1')   
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Add New Dish</Button>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Dish</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <Box style={{display:'flex',gap:'0.5rem'}}>
              <FormControl>
                
                <Input ref={initialRef} placeholder='Name' />
              </FormControl>
  
              <FormControl>
                
                <Input placeholder='Cost Price' />
              </FormControl>
              </Box>
              <Box style={{display:'flex',gap:'0.5rem'}}>
              <FormControl >
                
                <Input placeholder='Selling Price' />
              </FormControl>
              <FormControl>
                
                <Input placeholder='Cuisine' />
              </FormControl>
              </Box>
              <Box style={{display:'flex',gap:'0.5rem'}}>
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
              <Box style={{display:'flex',gap:'0.5rem'}}>
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
                <Input type="file" placeholder='Image' />
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
      </>
    )
  }
  export default DishesModal;