import { Box } from "@chakra-ui/react";
import MiContent from "./Content";
import MiDrawer from "./Drawer";
import Mifooter from "./Footer";
import MiHeader from "./Header";

const MiLayout = () =>{


    return(
        <Box>
        <MiHeader/>
        <MiContent/>
        <Mifooter/>
        
        </Box>
    )
}



export default MiLayout;