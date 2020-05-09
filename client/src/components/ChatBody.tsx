import React, { useRef, useLayoutEffect } from 'react'
import {IMessage} from '../redux/reducers/messageList'
import Message from './Message'
import { IUser } from '../redux/reducers/users'
import User from './User'

interface ChatBodyProps {
  room: string
  messList: IMessage[]
  users: IUser[]
}

const usersIcon = <i className="fas fa-users"></i>

const ChatBody: React.FC<ChatBodyProps> = (props) => {
  const messContainer = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    messContainer.current.scrollTop = messContainer.current.scrollHeight
  })
    
  return (
    <div className="chat-body card-body">
      <div className="chat-info">
        <h4 className="room-name"> {props.room} </h4>
        <p>{usersIcon} Подключены:</p>
        <ul className="users-list list-group">
          {props.users.map(user => <User key={user.id} {...user}/>)}
        </ul>
      </div>
      <div className="message-container" ref={messContainer}>
        <ul className="message-list">
          {props.messList.map(mess => <Message 
            key={mess.id} 
            {...mess}
          />)}
        </ul>
      </div>
    </div>
  )
}

export default ChatBody