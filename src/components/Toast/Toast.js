import React from "react"
import { useToast } from "@chakra-ui/react"
const Toast=(props)=>{
   const {title,description,duration}=props
   //console.log(title)
    const toast = useToast()
  return (      
        toast({
          title: title,
          description: description,
          status: 'success',
          duration: duration,
          isClosable: true,
        })    
  )
}

export default Toast