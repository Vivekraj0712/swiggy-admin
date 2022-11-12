import react from "react";
import { Tr,Td } from '@chakra-ui/react';
import edit from "../../images/edit.jpg"
import del from "../../images/delete.jpg"

const OrdersContent=(props)=>{
    const {ordersItems}=props
    console.log(ordersItems);
    return(
        <Tr>           
            <>
            <Td>{ordersItems.orderid}</Td>
            <Td>{ordersItems.dish}</Td>
            <Td isNumeric>{ordersItems.price}</Td>
            <Td>{ordersItems.location}</Td>
            <Td>{ordersItems.userid}</Td>
            <Td style={{display:"flex",gap:'0.2rem'}}><img src={edit} alt="edit" style={{height:"1.5rem"}}/><img src={del} alt="delete" style={{height:"1.5rem"}}/></Td>
            </>
          
        
      </Tr>
    )
}

export default OrdersContent