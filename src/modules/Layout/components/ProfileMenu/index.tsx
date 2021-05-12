import React, {FC} from 'react'
import MediaQuery from 'react-responsive'
import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import {useAuth} from '../../../../contexts/AuthContext'

const ProfileMenu: FC = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const {user, logout} = useAuth()
  return (
    <Menu>
      <MenuButton>
        <Avatar
          name={user?.displayName as string | undefined}
          src={user?.photoURL as string | undefined}
          size='sm'
          border='2px solid #fff'
        />
      </MenuButton>
      <MenuList>
        <MenuGroup title='Профиль'>
          <MenuItem>
            <Text>{user?.displayName}</Text>
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MediaQuery maxDeviceWidth={559}>
          <MenuItem onClick={toggleColorMode}>
            <Text>{`Тема: ${
              colorMode === 'light' ? 'Светлая' : 'Темная'
            }`}</Text>
          </MenuItem>
        </MediaQuery>
        <MenuItem onClick={logout}>
          <Text>Выход</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
