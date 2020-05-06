import React from 'react'
import JoinChatForm from '../containers/JoinChatForm'
import VisibleAlert from '../containers/VisibleAlert'

const joinChat: React.FC = () => {
  return (
    <div className="join-chat container">
      <div className="join-chat-card card border-dark">
        <VisibleAlert/>
        <div className="card-header">Чат</div>
        <JoinChatForm/>
      </div>
    </div>
  )
}

export default joinChat