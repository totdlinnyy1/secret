import React, {FC} from 'react'
import MediaQuery from 'react-responsive'
import {Box, Button, Image, useColorMode} from '@chakra-ui/react'
import {CheckIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import {Search, ProfileMenu} from '../index'
import logoDark from '../../../../img/logo.png'
import logoLight from '../../../../img/logoLight.png'

type HeaderProps = {
  toggleDrawer: any
}

const Header: FC<HeaderProps> = ({toggleDrawer}) => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Box w='100%'>
      <Box w='100%' h='71px' p={1} display='flex' alignItems='center'>
        <MediaQuery minDeviceWidth={600}>
          <Box mr='3'>
            {colorMode === 'light' ? (
              <Image src={logoDark} />
            ) : (
              <Image src={logoLight} />
            )}
          </Box>
        </MediaQuery>
        <Search toggleDrawer={toggleDrawer} />
        <MediaQuery minDeviceWidth={600}>
          <Box ml='auto' display='flex' alignItems='center'>
            <Box mr={1} cursor='pointer'>
              <Button variant='ghost'>
                <CheckIcon boxSize={6} />
              </Button>
            </Box>
            <Box onClick={toggleColorMode} mr={1} cursor='pointer'>
              {colorMode === 'light' ? (
                <Button variant='ghost'>
                  <MoonIcon boxSize={6} />
                </Button>
              ) : (
                <Button variant='ghost'>
                  <SunIcon boxSize={6} />
                </Button>
              )}
            </Box>
            <Box>
              <ProfileMenu />
            </Box>
          </Box>
        </MediaQuery>
      </Box>
      <MediaQuery minDeviceWidth={600}>
        <hr />
      </MediaQuery>
    </Box>
  )
}

export default Header
