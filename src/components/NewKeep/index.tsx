import React, {FC, useEffect, useState} from 'react'
import {Box, Collapse, Flex, Text, useDisclosure} from '@chakra-ui/react'
import {useMediaQuery} from 'react-responsive'
import {LockIcon} from '@chakra-ui/icons'
import KeepContent from '../KeepContent'
import KeepName from '../KeepName'
import {db} from '../../utils/firebase'

const NewKeep: FC<{uid: string; getKeeps: any; setLoading: any}> = ({
  uid,
  getKeeps,
  setLoading,
}) => {
  const {isOpen, onToggle, onOpen} = useDisclosure()
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 599px)'})
  const [postId, setPostId] = useState<string>('1')
  const [title, setTitle] = useState<string | null>(null)
  const [keep, setKeep] = useState<string | null>(null)

  const submit = async () => {
    setLoading(true)
    if (title || keep) {
      const keepsRef = db.doc('users/' + uid)
      if (postId === '1') {
        return await keepsRef
          .collection('keeps')
          .add({
            title,
            keep,
          })
          .then(docRef => setPostId(docRef.id))
          .catch(console.error)
      } else {
        return await keepsRef
          .collection('keeps')
          .doc(postId)
          .set({title, keep})
          .then(console.log)
          .catch(console.error)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => submit(), 1000)
    return () => clearTimeout(timeoutId)
  }, [title, keep])

  return (
    <Box minWidth='270px' w={isTabletOrMobile ? '98%' : '50%'} mx='auto'>
      <form>
        <Box
          h='60px'
          border='1px solid'
          borderBottom={isOpen ? 'none' : '1px solid'}
          borderRadius='4px'
          borderBottomRadius={isOpen ? '0' : '4px'}
          cursor='pointer'
          transition='0.3s'
          _hover={isOpen ? undefined : {backgroundColor: 'gray.300'}}
          onClick={onOpen}
        >
          {isOpen ? (
            <KeepName onChange={setTitle} value={title} />
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
          <KeepContent
            onToggle={async () => {
              if (keep || title) {
                getKeeps()
              }
              onToggle()
              setKeep(null)
              setTitle(null)
              setPostId('1')
            }}
            onChange={setKeep}
            value={keep}
            existKeep={false}
          />
        </Collapse>
      </form>
    </Box>
  )
}

export default NewKeep
