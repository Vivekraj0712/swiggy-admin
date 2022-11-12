import react from "react";
import { Box, useDisclosure, Button, Flex, Spacer, Square, Text, TableContainer, TableCaption, Thead, Tr, Th, Td, Table, Tbody, Tfoot, VStack } from '@chakra-ui/react';
import Sidebar from "./Sidebar";
import Topmenu from "./Topmenu";
import "./Dashboard.css"
import OrdersContent from "./OrdersContent";


const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const orderHeadings=['ORDERID','DISH','PRICE','LOCATION','USERID','ACTIONS'];
  const orderItems=[
    {
      orderid:"123",
      dish:"2 Veg Burgers",
      price:"Rs.350",
      location:"Noida",
      userid:"321",      
    },
    {
      orderid:"124",
      dish:"1 Masala Dosa",
      price:"Rs.150",
      location:"Delhi",
      userid:"322",
    },
    {
      orderid:"125",
      dish:"1 veg Noodles",
      price:"Rs.250",
      location:"Noida",
      userid:"321",
    },
    {
      orderid:"126",
      dish:"2 plate Chicken Momos",
      price:"Rs.350",
      location:"Delhi",
      userid:"432",
    }
  ]
  return (
    <VStack style={{alignItems:'stretch'}}>
      <Topmenu />
      <Flex >
        <Sidebar />
        {/*<Square flex="1" >*/}
          <TableContainer className="table">
            <Table variant='striped' colorScheme='teal' className="vertical-line">
              {/*<TableCaption>Customer's Orders</TableCaption>*/}
              <Thead>
                <Tr>
                {orderHeadings?orderHeadings.map((item)=>{
                  return (item==='PRICE')? <Th isNumeric>{item}</Th> : <Th>{item}</Th> 
                }):<div>Loader...</div>}  
                </Tr>
              </Thead>
              <Tbody>
                {orderItems?orderItems.map((item)=>
                <OrdersContent ordersItems={item}/>
                ):<div>Loader...</div>}
              </Tbody>
              <Tfoot>

              </Tfoot>
            </Table>
          </TableContainer>
        {/* </Square> */}
      </Flex>

    </VStack>
  )
}
export default Dashboard;