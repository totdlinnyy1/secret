import React, {useState} from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useColorMode,
  useDisclosure,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react'
import {useAuth} from '../../contexts/AuthContext'
import logoDark from '../../img/logo.png'
import logoLight from '../../img/logoLight.png'

const Auth = () => {
  const {login} = useAuth()
  const {colorMode} = useColorMode()
  const {isOpen, onClose, onToggle} = useDisclosure()
  const [loading, setLoading] = useState(false)
  return (
    <Box
      minWidth={270}
      maxWidth={500}
      p={10}
      h={300}
      mx='auto'
      mt='200px'
      shadow='2xl'
      borderRadius='2px'
    >
      <Flex alignItems='center' w='100%' justifyContent='center'>
        <Box>
          {colorMode === 'light' ? (
            <Image src={logoDark} />
          ) : (
            <Image src={logoLight} />
          )}
        </Box>
        <Box>
          <Heading as='h3'>SECRET</Heading>
        </Box>
      </Flex>
      <Flex w='100%' justifyContent='center' mt='14'>
        <Button
          leftIcon={
            <Image
              src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'
              w='24px'
            />
          }
          variant='outline'
          isLoading={loading}
          onClick={() => {
            setLoading(true)
            login().catch(() => setLoading(false))
          }}
        >
          Войти с Google
        </Button>
        <Button onClick={onToggle}>open modal</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              dolores excepturi expedita fuga laboriosam necessitatibus nobis
              perspiciatis provident rem sed! At corporis laboriosam
              perspiciatis provident quasi ratione sit temporibus, ut?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Auth
