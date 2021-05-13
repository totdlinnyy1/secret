import React, {FC, useEffect, useRef} from 'react'
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import {LockIcon} from '@chakra-ui/icons'
import {RiArchiveDrawerLine} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import './KeepContent.sass'

interface KeepContentProps {
  onToggle: () => void
  onChange: React.Dispatch<React.SetStateAction<string | null>>
  value: string | null
}

const KeepContent: FC<KeepContentProps> = ({onToggle, onChange, value}) => {
  const textareaRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!value) {
      textareaRef.current!.innerHTML = ''
    }
  }, [value])
  return (
    <Flex
      flexDirection='column'
      justifyContent='space-between'
      border='2px solid'
      borderTop='none'
      borderRadius='2px'
      maxWidth='830px'
    >
      <div
        className='textarea'
        contentEditable={true}
        data-placeholder='Заметка...'
        onInput={e => onChange(e.currentTarget.innerHTML)}
        ref={textareaRef}
      />
      <Flex alignItems='center' justifyContent='space-between' px={5} py={2}>
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
        <Button variant='ghost' onClick={onToggle}>
          Закрыть
        </Button>
      </Flex>
    </Flex>
  )
}

export default KeepContent
