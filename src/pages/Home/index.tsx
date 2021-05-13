import React, {useEffect, useState} from 'react'
import {Flex, useToast} from '@chakra-ui/react'
import {KeepOverlay, NewKeep} from '../../components'
import {Layout} from '../../modules'
import {useAuth} from '../../contexts/AuthContext'
import {db} from '../../utils/firebase'

type KeepType = {
  keepId: string
  keepData: any
}

const Home = () => {
  const {user} = useAuth()
  const toast = useToast()
  const [keeps, setKeeps] = useState<KeepType[] | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const data: KeepType[] = []
      const keepsRef = db.doc('users/' + user?.uid)
      await keepsRef
        .collection('keeps')
        .get()
        .then(querySnapshot =>
          querySnapshot.forEach(doc =>
            data.push({keepId: doc.id, keepData: doc.data()})
          )
        )
        .catch(err => {
          toast({
            title: 'Какая-то ощибка',
            status: 'error',
            position: 'bottom-left',
          })
          console.log(err)
        })
      console.log(data)
      setKeeps(data)
    }
    fetchData()
  }, [])
  return (
    <Layout>
      <Flex justifyContent='center' marginTop={20}>
        <NewKeep uid={user?.uid as string} />
      </Flex>
      <Flex alignItems='center' marginTop={5} maxWidth='90%' mx='auto' flexWrap='wrap'>
        {keeps &&
          keeps.map(keep => (
            <KeepOverlay
              title={keep.keepData.title}
              keep={keep.keepData.keep}
            />
          ))}
      </Flex>
    </Layout>
  )
}

export default Home
