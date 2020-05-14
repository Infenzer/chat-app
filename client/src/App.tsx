import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import joinChat from './page/JoinChat'
import './scss/style.scss'
import Loader from './components/Loader'

const Chat = React.lazy(() => import('./page/Chat'))
 
export interface ChatParam {
  name: string,
  room: string
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path='/' component={joinChat}/>
          <Route exact path='/chat/:name/:room' component={Chat}/>
          <Redirect to='/'/>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App