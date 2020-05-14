import React, { useState, useEffect } from 'react'
import socket, { sendMessClick, messListener } from '../socket'

const СhatFooter: React.FC = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    messListener(value, socket.id)
  }, [value.length > 0])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    sendMessClick(value)

    setValue('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="chat-footer card-footer text-muted">
      <form className="send-message-form">
        <input 
          className="form-control mr-2" 
          type="text" 
          value={value}
          onChange={e => handleChange(e)}
        />
        <button 
          className="btn btn-outline-dark" 
          onClick={e => handleClick(e)}
        >Отправить</button>
      </form>
    </div>
  )
}

export default СhatFooter