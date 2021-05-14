import React, {useState, FC} from 'react'
import {Box} from '@chakra-ui/react'
import {DrawerMenu, Header, Menu} from '../../components'
import MediaQuery from 'react-responsive'

const Layout: FC<{loading: boolean}> = ({children, loading}) => {
    const [isOpen, setOpen] = useState(false)
    const toggleDrawer = () => setOpen(!isOpen)

    return (
        <Box>
            <Box>
                <Header toggleDrawer={toggleDrawer} loading={loading}/>
            </Box>
            <Box display='flex'>
                <DrawerMenu isOpen={isOpen} onClose={toggleDrawer}/>
                <MediaQuery minDeviceWidth={600}>
                    <Box w='300px' paddingTop={5}>
                        <Menu/>
                    </Box>
                </MediaQuery>
                <Box w='100%'>{children}</Box>
            </Box>
        </Box>
    )
}

export default Layout
