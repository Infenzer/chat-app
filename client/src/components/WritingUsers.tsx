import React, { useEffect, useState } from 'react'
import socket from '../socket'
import { CSSTransition } from 'react-transition-group'

type WritingUsers =  Array<{
  id: string,
  name: string
}>

const WritingUsers: React.FC = () => {
  const [writingUsers, setWritingUsers] = useState<WritingUsers>([])
  let text = ''

  useEffect(() => {
    console.log('helo')
    // Message Listner
    socket.on('messListener', ({id, name}, active) => {
      if (active) {
        setWritingUsers(prevState => {
          return [...prevState, { id, name }]
        })
      } else {
        setWritingUsers(prevState => {
          return prevState.filter(user => user.id !== id)
        })
      }
    })
  }, [])

  if (writingUsers.length === 1) {
    text = `${writingUsers[0].name} набирает сообщение...`
  } else if (writingUsers.length === 2) {
    text = `${writingUsers[0].name} и ${writingUsers[1].name} набирают сообщение...`
  } else if (writingUsers.length > 2) {
    text = 'Несколько человек набирают сообщение...'
  }

  return (
    <CSSTransition
      in={writingUsers.length > 0}
      classNames="writing"
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <div className="writing-users">
        <p> {text} </p>
      </div>
    </CSSTransition>
  )
}

export default WritingUsers