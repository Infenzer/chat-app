import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

const WritingUsers: React.FC = () => {
  const writingUsers = useSelector((state: RootState) => state.writingUsers)
  let text = ''

  useEffect(() => {
    
  }, [])

  switch(writingUsers.length) {
    case 0:
      text = ''
      break
    case 1:
      text = `${writingUsers[0].name} набирает сообщение...`
      break
    case 2: 
      text = `${writingUsers[0].name} и ${writingUsers[1].name} набирают сообщение...`
      break
    default: 
      text = 'Несколько человек набирают сообщение...'
  }

  return (
    <div className="writing-users">
      <p> {text} </p>
    </div>
  )
}

export default WritingUsers