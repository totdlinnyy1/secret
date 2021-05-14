import React, {useEffect, useState} from 'react'
import {Flex, useToast} from '@chakra-ui/react'
import {Keep, KeepOverlay, NewKeep} from '../../components'
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
  const [keepOpen, setKeepOpen] = useState<boolean>(false)
  const [openKeepId, setOpenKeepId] = useState<string | null>(null)
  const [keeps, setKeeps] = useState<KeepType[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const closeKeep = () => {
    setKeepOpen(false)
    setOpenKeepId(null)
  }
  const openKeep = (keepId: string) => {
    setOpenKeepId(keepId)
    setKeepOpen(true)
  }

  const getKeeps = async () => {
    setLoading(true)
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
    return data
  }

  const deleteKeep = async (keepId: string) => {
    const keepRef = db
      .doc('users/' + user?.uid)
      .collection('keeps')
      .doc(keepId)
    await keepRef
      .delete()
      .then(getKeeps)
      .catch(err => {
        toast({
          title: 'Какая-то ощибка',
          status: 'error',
          position: 'bottom-left',
        })
        console.log(err)
      })
    setLoading(false)
  }
  useEffect(() => {
    const fetchData = async () => {
      await getKeeps()
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <Layout loading={loading}>
      <Flex justifyContent='center' marginTop={20}>
        <NewKeep
          uid={user?.uid as string}
          getKeeps={getKeeps}
          setLoading={setLoading}
        />
      </Flex>
      <Flex
        alignItems='start'
        marginTop={5}
        maxWidth='90%'
        mx='auto'
        flexWrap='wrap'
      >
        {keeps &&
          keeps.map(keep => (
            <KeepOverlay
              keepId={keep.keepId}
              title={keep.keepData.title}
              keep={keep.keepData.keep}
              deleteKeep={deleteKeep}
              openKeep={openKeep}
            />
          ))}
      </Flex>
      <Keep
        isOpen={keepOpen}
        onClose={closeKeep}
        keepId={openKeepId as string}
        uid={user?.uid as string}
      />
    </Layout>
  )
}

export default Home
