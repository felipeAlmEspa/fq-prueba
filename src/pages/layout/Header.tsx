import { Box, Heading,
  } from '@chakra-ui/react'
import MiDrawer from './Drawer';

const MiHeader = () =>{

    return(
        <Box width={'100%'} height={'70px'} bgColor={'#003366'}>
           {/* <MiDrawer/>  */}
            <Heading as='h4' size='md' padding={'20px'} color={'white'}>
               TOMAS FELIPE QUICHIMBO PERALTA
            </Heading>
        </Box>
    )
}




export default MiHeader;