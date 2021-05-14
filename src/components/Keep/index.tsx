import React, {FC, useEffect, useState} from 'react'
import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react'
import {KeepName, KeepContent} from '../index'
import {db} from '../../utils/firebase'

interface KeepProps {
  isOpen: boolean
  onClose: () => void
  keepId: string
  uid: string
}

const Keep: FC<KeepProps> = ({isOpen, onClose, keepId, uid}) => {
  const [keepName, setKeepName] = useState<string | null>(null)
  const [keep, setKeep] = useState<string | null>(null)
  const toast = useToast()
  useEffect(() => {
    if (keepId) {
      const fetch = async () => {
        const keepRef = db
            .doc('users/' + uid)
            .collection('keeps')
            .doc(keepId)
        await keepRef
            .get()
            .then(doc => {
              const data = doc.data()
              setKeepName(data!.title)
              setKeep(data!.keep)
            })
            .catch(err => {
              toast({
                title: 'Какая-то ощибка',
                status: 'error',
                position: 'bottom-left',
              })
              console.log(err)
            })
      }
      fetch()
    }
  }, [keepId, keepName, keep])
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Box border='1px solid' borderBottom='none'>
          <KeepName onChange={setKeepName} value={keepName} />
        </Box>
        <Box>
          <KeepContent onToggle={onClose} onChange={setKeep} value={keep} existKeep={true} />
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default Keep
