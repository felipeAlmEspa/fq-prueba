import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Menu } from "../../configuracion/Menu";

const MiContent = () =>{
    return(
        <Box width={'100%'} >
            <UnorderedList >
                {Menu.map(item => {
                  return <ListItem key={item.id} >
                      <Link  href={item.url}>{item.label}</Link>
                  </ListItem>
                })}
              </UnorderedList>
            <Outlet />
        </Box>
    )

}



export default MiContent;