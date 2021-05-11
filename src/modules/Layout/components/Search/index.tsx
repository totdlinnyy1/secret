import React, {FC} from 'react'
import MediaQuery from 'react-responsive'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import {Search2Icon, HamburgerIcon} from '@chakra-ui/icons'
import {ProfileMenu} from '../index'

type SearchProps = {
  toggleDrawer: any
}

const Search: FC<SearchProps> = ({toggleDrawer}) => {
  const btnRef = React.useRef(null)
  return (
    <Box w='100%'>
      <MediaQuery minDeviceWidth={600}>
        <Box w='400px'>
          <InputGroup borderRadius={5}>
            <InputLeftElement
              pointerEvents='none'
              children={<Search2Icon color='gray.300' />}
            />
            <Input type='text' placeholder='Поиск' borderRadius={4} />
          </InputGroup>
        </Box>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={599}>
        <Box h='50px'>
          <InputGroup borderRadius={5} h='50px'>
            <InputLeftElement
              children={<HamburgerIcon onClick={toggleDrawer} />}
              h='50px'
              ref={btnRef}
            />
            <InputRightElement children={<ProfileMenu />} h='50px' />
            <Input type='text' placeholder='Поиск' borderRadius={4} h='50px' />
          </InputGroup>
        </Box>
      </MediaQuery>
    </Box>
  )
}

export default Search
