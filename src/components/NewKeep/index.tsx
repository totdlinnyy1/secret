import React, {FC} from 'react'
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import {AttachmentIcon} from '@chakra-ui/icons'
import {LockIcon} from '@chakra-ui/icons'
import {RiArchiveDrawerLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'

const NewKeep: FC = () => {
  const {isOpen, onToggle, onClose} = useDisclosure()
  const toast = useToast()
  return (
    <>
      <Box
        minWidth='270px'
        width='50%'
        h='60px'
        border='2px solid'
        borderRadius='2px'
        cursor='pointer'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        px={5}
        mx='auto'
        transition='0.3s'
        _hover={{backgroundColor: 'gray.300'}}
        onClick={onToggle}
      >
        <Box>
          <Text> Новая заметка...</Text>
        </Box>
        <Box>
          <LockIcon />
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay />
        <ModalContent borderRadius='2px'>
          <ModalHeader>
            <Flex justifyContent='space-between'>
              <Box w='90%'>
                <Input placeholder='Название...' variant='unstyled' />
              </Box>
              <Box>
                <Button variant='ghost'>
                  <AttachmentIcon w={6} h={6} />
                </Button>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex
              flexDirection='column'
              justifyContent='space-between'
              mt={5}
              minHeight='500px'
              maxHeight='700px'
            >
              <Box h='450px'>
                <Textarea
                  height='400px'
                  placeholder='Заметка...'
                  resize='none'
                  variant='unstyled'
                />
              </Box>
              <Flex h='50px' justifyContent='space-between'>
                <Box>
                  <Flex
                    alignItems='center'
                    w='160px'
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
                        <MenuItem
                          onClick={() => {
                            toast({
                              title: 'Новая заметка удалена',
                              status: 'info',
                              variant: 'subtle',
                              position: 'bottom-left',
                            })
                            onToggle()
                          }}
                        >
                          <Text>Удалить</Text>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Box>
                <Box>
                  <Button
                    variant='ghost'
                    onClick={() => {
                      toast({
                        title: 'Новая заметка удалена',
                        status: 'info',
                        variant: 'subtle',
                        position: 'bottom-left',
                      })
                      onToggle()
                    }}
                  >
                    Закрыть
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewKeep
