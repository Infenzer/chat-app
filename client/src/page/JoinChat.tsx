import React from 'react'
import JoinChatForm from '../components/JoinChatForm'

const joinChat: React.FC = () => {
  return (
    <div className="join-chat container">
      <div className="join-chat-card card border-dark">
        <div className="card-header">Чат</div>
        <JoinChatForm/>
      </div>
    </div>
  )
}

export default joinChat