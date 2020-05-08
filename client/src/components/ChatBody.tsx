import React from 'react'
import {IMessage} from '../redux/reducers/messageList'
import Message from './Message'
import { IUser } from '../redux/reducers/users'
import User from './User'

interface ChatBodyProps {
  room: string
  messList: IMessage[]
  users: IUser[]
}

const ChatBody: React.FC<ChatBodyProps> = (props) => {
  return (
    <div className="chat-body card-body">
      <div className="chat-info">
        <h4 className="room-name"> {props.room} </h4>
        <p> Подключены:</p>
        <ul className="users-list list-group">
          {props.users.map(user => <User key={user.id} {...user}/>)}
        </ul>
      </div>
      <div className="message-container">
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