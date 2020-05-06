import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { ChatParam } from '../App'

interface ChatProps extends RouteChildrenProps<ChatParam>{}

const Chat: React.FC<ChatProps> = (props) => {
  return(
    <div>
      <h1>Chat</h1>
    </div>
  )
}

export default Chat