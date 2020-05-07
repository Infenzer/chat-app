import React from 'react'

interface ChatBodyProps {
  room: string
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
        <ul></ul>
      </div>
    </div>
  )
}

export default ChatBody