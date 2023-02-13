import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MiContent = () =>{
    return(
        <Box width={'100%'} >
            <Outlet />
        </Box>
    )

}



export default MiContent;