import React from 'react'
import JoinChatForm from '../containers/JoinChatForm'
import VisibleAlert from '../containers/VisibleAlert'

const chatIcon = <i className="far fa-comment"></i>

const joinChat: React.FC = () => {
  return (
    <div className="join-chat container">
      <div className="join-chat-card card border-dark">
        <VisibleAlert/>
        <div className="card-header">{chatIcon} Чат</div>
        <JoinChatForm/>
      </div>
    </div>
  )
}

export default joinChat