import React, {FC} from 'react'
import {Box, Text, Icon} from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import {RiArchiveDrawerLine} from 'react-icons/ri'

const MenuContent: FC = () => {
  return (
    <Box
      w='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      p={3}
    >
      <Box
        display='flex'
        alignItems='center'
        border='2px solid'
        borderRadius='2px'
        w='100%'
        h='40px'
        pl={3}
        mb={5}
        cursor='pointer'
        transition='0.3s'
        _hover={{backgroundColor: 'gray.300'}}
      >
        <EditIcon mr='5' />
        <Text>Заметки</Text>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        border='2px solid'
        borderRadius='2px'
        w='100%'
        h='40px'
        pl={3}
        mb={5}
        cursor='pointer'
        transition='0.3s'
        _hover={{backgroundColor: 'gray.300'}}
      >
        <Icon as={RiArchiveDrawerLine} mr='5' />
        <Text>Архив</Text>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        border='2px solid'
        borderRadius='2px'
        w='100%'
        h='40px'
        pl={3}
        mb={5}
        cursor='pointer'
        transition='0.3s'
        _hover={{backgroundColor: 'gray.300'}}
      >
        <DeleteIcon mr='5' />
        <Text>Корзина</Text>
      </Box>
    </Box>
  )
}

export default MenuContent
