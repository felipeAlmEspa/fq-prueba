import { ChevronLeftIcon, HamburgerIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,
  DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, Link, ListIcon, ListItem, OrderedList, UnorderedList, useDisclosure
} from "@chakra-ui/react"
import * as React from "react";
import { Menu } from "../../configuracion/Menu";
function MiDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Box padding={'10px'}>
        <IconButton onClick={onOpen} aria-label='Search database' icon={<HamburgerIcon />} />

      </Box>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}

      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader><strong>Navegacion</strong></DrawerHeader>

          

          <DrawerBody>
            <Box paddingTop={'50px'}>
              <UnorderedList >
                {Menu.map(item => {
                  return <ListItem key={item.id} >
                      <Link  href={item.url}>{item.label}</Link>
                  </ListItem>
                })}
              </UnorderedList>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <ChevronLeftIcon w={8} h={8} onClick={onClose} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default MiDrawer;