import React, {FC} from 'react'
import MediaQuery from 'react-responsive'
import {Box, Button, Icon, Image, useColorMode} from '@chakra-ui/react'
import {SunIcon} from '@chakra-ui/icons'
import {IoCloudDoneOutline} from 'react-icons/io5'
import {BiMoon} from 'react-icons/bi'
import {Search, ProfileMenu} from '../index'
import logoDark from '../../../../img/logo.png'
import logoLight from '../../../../img/logoLight.png'

type HeaderProps = {
  toggleDrawer: () => void
  loading: boolean
}

const Header: FC<HeaderProps> = ({toggleDrawer, loading}) => {
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
              <Button variant='ghost' isLoading={loading} disabled={true}>
                <Icon as={IoCloudDoneOutline} boxSize={6} />
              </Button>
            </Box>
            <Box onClick={toggleColorMode} mr={1} cursor='pointer'>
              {colorMode === 'light' ? (
                <Button variant='ghost'>
                  <SunIcon boxSize={6} />
                </Button>
              ) : (
                <Button variant='ghost'>
                  <Icon as={BiMoon} boxSize={6} />
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
