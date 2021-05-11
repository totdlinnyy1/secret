import React, {FC} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import {Home, Auth} from './pages'
import {useAuth} from './contexts/AuthContext'

const App: FC = () => {
  const {user} = useAuth()

  const PrivateRoute: FC<{
    component: FC
    path: string
    exact: boolean
  }> = props =>
    user ? (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    ) : (
      <Redirect to='/' />
    )
  const NoUserRoute: FC<{
    component: FC
    path: string
    exact: boolean
  }> = props =>
      !user ? (
          <Route
              path={props.path}
              exact={props.exact}
              component={props.component}
          />
      ) : (
          <Redirect to='/home' />
      )
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Home} path='/home' exact={true} />
        <NoUserRoute component={Auth} path='/' exact={true} />
      </Switch>
    </Router>
  )
}

export default App
