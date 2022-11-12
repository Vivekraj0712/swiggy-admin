import react from "react";
import { Box, useDisclosure,Button,Flex, Spacer, Square,Text,TableContainer,TableCaption,Thead,Tr,Th,Td,Table,Tbody,Tfoot } from '@chakra-ui/react';
import Sidebar from "./Sidebar";
import Topmenu from "./Topmenu";
import "./Dashboard.css"
import DishesContent from "./DishesContent";

const Dishes=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const columnHeadings=['Name','Cost Price','Selling Price','Type','Cuisine','Image','Unit Type','Preparation Time','Add Ons','Actions']
    const dishesItems=[
     {
       name:"2 Burgers",
       costPrice:"Rs.250",
       sellingPrice:"Rs.200",
       type:"Veg",
       cuisine:"Continental",
       image:"image",
       unitType:"1 unit",
       preparationTime:"30 mins",
       addOns:"extra cheese"
       
     },

     {
      name:"1 Butter Chicken",
      costPrice:"Rs.350",
      sellingPrice:"Rs.250",
      type:"Non-Veg",
      cuisine:"Mughlai",
      image:"image",
      unitType:"1.5 Kilo",
      preparationTime:"30 mins",
      addOns:"extra gravy"
      
    },

    {
      name:"1 Masala Dosa",
      costPrice:"Rs.150",
      sellingPrice:"Rs.80",
      type:"Veg",
      cuisine:"South Indian",
      image:"image",
      unitType:"1 unit",
      preparationTime:"25 mins",
      addOns:"extra Chatni"
      
    },

    {
      name:"1 regular Pizza",
      costPrice:"Rs.350",
      sellingPrice:"Rs.300",
      type:"Veg",
      cuisine:"Italian",
      image:"image",
      unitType:"1 unit",
      preparationTime:"30 mins",
      addOns:"extra cheese"
      
    }

  ]
    return(
        <>
     <Topmenu/>
     <Flex>
      <Sidebar/>
      <Box  >
  <TableContainer className="table">
  <Table variant='striped' colorScheme='teal' className="vertical-line">
    
    <Thead>
      <Tr>
        {columnHeadings ? columnHeadings.map((item)=>{return <Th>{item}</Th>}):<div>Loader...</div>}
      </Tr>
    </Thead>
    <Tbody>
      {dishesItems?dishesItems.map((item)=>{
       return <DishesContent dishesItems={item}/>
        }):<div>Loader...</div>}
    </Tbody>
    <Tfoot>
    
    </Tfoot>
  </Table>
</TableContainer>
            </Box>
     </Flex>
     
        </>
    )
}
export default Dishes;