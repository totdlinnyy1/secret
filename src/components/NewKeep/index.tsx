import React, {FC} from 'react'
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import {useMediaQuery} from 'react-responsive'
import {AttachmentIcon} from '@chakra-ui/icons'
import {LockIcon} from '@chakra-ui/icons'
import {RiArchiveDrawerLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import './NewKeep.sass'

const NewKeep: FC = () => {
  const {isOpen, onToggle, onOpen} = useDisclosure()
  const isTablet = useMediaQuery({query: '(max-width: 599px)'})
  const isMobile = useMediaQuery({query: '(max-width: 400px)'})

  return (
    <Box
        minWidth='270px'
      w={isMobile ? '100%' : isTablet ? '98%' : '50%'}
      mx='auto'
    >
      <Box
        h='60px'
        border='2px solid'
        borderBottom={isOpen ? 'none' : '2px solid'}
        borderRadius='2px'
        cursor='pointer'
        transition='0.3s'
        _hover={isOpen ? undefined : {backgroundColor: 'gray.300'}}
        onClick={onOpen}
      >
        {isOpen ? (
          <Flex
            h='60px'
            alignItems='center'
            justifyContent='space-between'
            p={5}
          >
            <Box>
              <Input variant='unstyled' placeholder='Название...' />
            </Box>
            <Box>
              <Button variant='ghost'>
                <AttachmentIcon boxSize={6} />
              </Button>
            </Box>
          </Flex>
        ) : (
          <Flex
            h='60px'
            px={5}
            alignItems='center'
            justifyContent='space-between'
          >
            <Box>
              <Text> Новая заметка...</Text>
            </Box>
            <Box>
              <LockIcon />
            </Box>
          </Flex>
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          flexDirection='column'
          justifyContent='space-between'
          border='2px solid'
          borderTop='none'
          borderRadius='2px'
        >
          <div
            className='textarea'
            contentEditable={true}
            data-placeholder='Заметка...'
          />
          <Flex
            alignItems='center'
            justifyContent='space-between'
            px={5}
            py={2}
          >
            <Flex
              alignItems='center'
              justifyContent='space-between'
            >
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
            <Button variant='ghost' onClick={onToggle}>
              Закрыть
            </Button>
          </Flex>
        </Flex>
      </Collapse>
    </Box>
  )
}

export default NewKeep
