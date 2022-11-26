import React from 'react';
import {Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react';
const ErrorFound=(props)=>{
    const {title,description}=props
    return(
        <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        </Alert>
    )
}
export default ErrorFound;