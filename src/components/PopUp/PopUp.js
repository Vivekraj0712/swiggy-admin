import React, { useEffect } from 'react'
import { 
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
     
} from '@chakra-ui/react'

const PopUp=(props)=>{
  const {closePopUp,handleToast,title,description,successCallBack}=props
  useEffect(()=>{
  return ()=>{
    handleToast()
  }}
  ,[])
  
    return(
        <AlertDialog
        isOpen={true}
        
        onClose={closePopUp}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>
              {description}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button  onClick={closePopUp}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={successCallBack} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    )
}

export default PopUp