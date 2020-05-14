import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { ChatParam } from '../App'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import useSocket from '../hooks/socket.hook'

interface ChatProps extends RouteChildrenProps<ChatParam>{}

const ChatIcon = <i className="far fa-comment"></i>

const Chat: React.FC<ChatProps> = (props) => {
  const params = props.match.params
  useSocket(params.name, params.room)

  return(
    <div className="chat container col-lg-8 col-sm-12">
      <div className="card border-dark">
        <div className="chat-header card-header">
          <h2>{ChatIcon} Чат</h2>
          <a href='/' className="btn btn-outline-dark">Выйти</a>
        </div>
        <ChatBody 
          room={params.room} 
        />
        <ChatFooter/>
      </div>
    </div>
  )
}

export default Chat