import React from 'react'
import messageList, {IMessage} from '../redux/reducers/messageList'
import Message from './Message'

interface ChatBodyProps {
  room: string
  messList: IMessage[]
}

const ChatBody: React.FC<ChatBodyProps> = (props) => {
  return (
    <div className="chat-body card-body">
      <div className="chat-info">
        <h6>Room Name:</h6>
        <h4> {props.room} </h4>
        <h6>Users:</h6>
        <ul></ul>
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