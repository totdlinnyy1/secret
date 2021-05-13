import React from 'react'
import {Box} from '@chakra-ui/react'
import {NewKeep} from '../../components'
import {Layout} from '../../modules'
import {useAuth} from "../../contexts/AuthContext";

const Home = () => {
    const {user} = useAuth()
  return (
    <Layout>
      <Box display='flex' justifyContent='center' marginTop={20}>
          <NewKeep uid={user?.uid as string} />
      </Box>
    </Layout>
  )
}

export default Home
