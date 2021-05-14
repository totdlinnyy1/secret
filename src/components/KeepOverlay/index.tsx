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
  useColorMode,
} from '@chakra-ui/react'
import {AttachmentIcon, CheckIcon, LockIcon} from '@chakra-ui/icons'
import './KeepOverlay.sass'
import {RiArchiveDrawerLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'

interface KeepOverlayProps {
  keepId: string
  title: string
  keep: string
  deleteKeep: (keepId: string) => void
  openKeep: (keepId: string) => void
}

const KeepOverlay: FC<KeepOverlayProps> = ({
  keepId,
  title,
  keep,
  deleteKeep,
  openKeep,
}) => {
  const {colorMode} = useColorMode()
  return (
    <Flex
      shadow='md'
      minWidth='256px'
      maxWidth='450px'
      minHeight='153px'
      borderRadius='4px'
      maxHeight='350px'
      m={4}
      p={2}
      transition='0.2s'
      border={colorMode === 'dark' ? '1px solid' : undefined}
      _hover={{shadow: '2xl', border: '1px solid'}}
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
        <Box minHeight='100px' onClick={() => openKeep(keepId)}>
          <Box pointerEvents='none'>
            <Text fontWeight='bold'>{title}</Text>
          </Box>
          <Box pointerEvents='none' maxHeight='270px' overflow='hidden'>
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
                <MenuItem onClick={() => deleteKeep(keepId)}>
                  <Text>Удалить</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default KeepOverlay
