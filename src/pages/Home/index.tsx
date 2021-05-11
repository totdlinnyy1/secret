import React from 'react'
import {Box} from '@chakra-ui/react'
import {NewKeep} from '../../components'
import {Layout} from '../../modules'

const Home = () => {
  return (
    <Layout>
      <Box w='100%' display='flex' justifyContent='center' marginTop={20}>
        <NewKeep />
      </Box>
    </Layout>
  )
}

export default Home
