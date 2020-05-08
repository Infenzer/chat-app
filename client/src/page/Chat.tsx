import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { ChatParam } from '../App'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import useSocket from '../hooks/socket.hook'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

interface ChatProps extends RouteChildrenProps<ChatParam>{}

const Chat: React.FC<ChatProps> = (props) => {
  const params = props.match.params
  const messList = useSelector((state: RootState) => state.messageList)
  const users = useSelector((state: RootState) => state.users)
  const socket = useSocket(params.name, params.room)

  return(
    <div className="chat container col-lg-8 col-sm-12">
      <div className="card border-dark">
        <div className="chat-header card-header">
          <h2>Чат</h2>
          <a href='/' className="btn btn-outline-dark">Выйти</a>
        </div>
        <ChatBody 
          room={params.room} 
          messList={messList}
          users={users}
        />
        <ChatFooter onClick={socket.sendMessClick}/>
      </div>
    </div>
  )
}

export default Chat