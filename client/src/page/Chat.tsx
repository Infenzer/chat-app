import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { ChatParam } from '../App'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'

interface ChatProps extends RouteChildrenProps<ChatParam>{}

const Chat: React.FC<ChatProps> = (props) => {
  const params = props.match.params

  return(
    <div className="chat container col-lg-8 col-sm-12">
      <div className="card border-dark">
        <div className="chat-header card-header">
          <h2>Чат</h2>
          <a href='/' className="btn btn-outline-dark">Выйти</a>
        </div>
        <ChatBody room={params.room}/>
        <ChatFooter/>
      </div>
    </div>
  )
}

export default Chat