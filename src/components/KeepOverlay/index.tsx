import React, {FC} from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import {AttachmentIcon, CheckIcon, LockIcon} from '@chakra-ui/icons'
import './KeepOverlay.sass'
import {RiArchiveDrawerLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'

interface KeepOverlayProps {
  title: string
  keep: string
}

const KeepOverlay: FC<KeepOverlayProps> = ({title, keep}) => {
  return (
    <Flex
      shadow='md'
      minWidth='256px'
      minHeight='153px'
      borderRadius='4px'
      m={4}
      p={2}
      transition='0.2s'
      _hover={{shadow: '2xl'}}
      position='relative'
      className='overlay'
      justifyContent='space-between'
      flexDirection='column'
    >
      <Box>
        <Box
          position='absolute'
          top='-10px'
          right='-10px'
          className='attachment'
        >
          <AttachmentIcon />
        </Box>
        <Box position='absolute' top='-10px' left='-10px' className='checkbox'>
          <Checkbox icon={<CheckIcon />} size='lg' />
        </Box>
        <Box>
          <Text fontWeight='bold'>{title}</Text>
        </Box>
        <Box>
          <div dangerouslySetInnerHTML={{__html: keep}} />
        </Box>
      </Box>
      <Flex alignItems='center' justifyContent='flex-end' className='actions'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Button variant='ghost'>
            <LockIcon />
          </Button>
          <Button variant='ghost'>
            <Icon as={RiArchiveDrawerLine} />
          </Button>
          <Menu>
            <MenuButton>
              <Button variant='ghost'>
                <Icon as={FiMoreVertical} />
              </Button>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Text>Удалить</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default KeepOverlay
