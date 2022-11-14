import react from "react"
import { Flex,Box,Spacer } from "@chakra-ui/react"
import CommonModal from "./CommonModal"
import ProfileModalContent from "./ProfileModalContent"

const Topmenu=()=>{
    const logo = "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png";
    const title="My Profile"
    return(
        <Flex bg='teal.100'>
            <Box p='4' >
            <img src={logo} alt="logo" className="logo"/>
            </Box>
            <Spacer />
            <Box p='4' >            
            <CommonModal title={title} clickButton={title} component={<ProfileModalContent/>}/>
            </Box>
     </Flex>
    )
}

export default Topmenu