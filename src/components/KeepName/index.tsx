import React, {FC} from 'react'
import {Box, Button, Flex, Input} from '@chakra-ui/react'
import {AttachmentIcon} from '@chakra-ui/icons'

interface KeepNameProps {
  onChange: React.Dispatch<React.SetStateAction<string | null>>
  value: string | null
}

const KeepName: FC<KeepNameProps> = ({onChange, value}) => {
  return (
    <Flex h='60px' alignItems='center' justifyContent='space-between' p={5}>
      <Box>
        <Input
          value={value as string}
          variant='unstyled'
          placeholder='Название...'
          onChange={e => onChange(e.currentTarget.value)}
        />
      </Box>
      <Box>
        <Button variant='ghost'>
          <AttachmentIcon boxSize={6} />
        </Button>
      </Box>
    </Flex>
  )
}

export default KeepName
