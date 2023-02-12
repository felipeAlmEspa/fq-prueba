import { Box,
  } from '@chakra-ui/react'
import MiDrawer from './Drawer';

const MiHeader = () =>{

    return(
        <Box width={'100%'} height={'60px'} bgColor={'#003366'}>
           <MiDrawer/> 
        </Box>
    )
}




export default MiHeader;