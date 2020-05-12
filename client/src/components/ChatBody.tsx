import React, { useRef, useLayoutEffect } from 'react'
import {IMessage} from '../redux/reducers/messageList'
import Message from './Message'
import { IUser } from '../redux/reducers/users'
import User from './User'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

  const usersList = (
    <TransitionGroup component="ul" className="users-list list-group">
      {props.users.map(user => 
        <CSSTransition
          key={user.id}
          classNames="user"
          timeout={450} 
        >
          <User 
            {...user} 
          />
        </CSSTransition>
      )}
    </TransitionGroup>
  )

  const messageList = (
    <TransitionGroup component="ul" className="message-list">
      {props.messList.map(mess => 
        <CSSTransition
          key={mess.id}
          classNames="message"
          timeout={650} 
        >
          <Message 
            {...mess}
          />
        </CSSTransition>
      
      )}
    </TransitionGroup>
  )
    
  return (
    <div className="chat-body card-body">
      <div className="chat-info">
        <h4 className="room-name"> {props.room} </h4>
        <p>{usersIcon} Подключены:</p>
        {usersList}
      </div>
      <div className="message-container" ref={messContainer}>
        {messageList}
      </div>
    </div>
  )
}

export default ChatBody