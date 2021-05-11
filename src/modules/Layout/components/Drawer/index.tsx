import React, {FC} from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody, Heading,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {MenuContent} from '../index'

type DrawerMenuProps = {
  isOpen: boolean
  onClose: any
}

const DrawerMenu: FC<DrawerMenuProps> = ({isOpen, onClose}) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={true}
      closeOnOverlayClick={true}
      placement='left'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display='flex' alignItems='center'>
          <HamburgerIcon onClick={onClose} mr='3' />
          <Heading>Secret</Heading>
        </DrawerHeader>

        <DrawerBody>
          <MenuContent />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerMenu
