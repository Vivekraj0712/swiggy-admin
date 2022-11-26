import React from 'react'
import { Alert,AlertIcon } from '@chakra-ui/react'


const NoDataFound=(props)=>{
    const {warning}=props
    return(
        <Alert status='warning'>
    <AlertIcon />
    {warning}
  </Alert>
    )
}

export default NoDataFound

