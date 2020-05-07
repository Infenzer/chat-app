import React, { useState } from 'react'

const СhatFooter: React.FC = () => {
  const [value, setValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue('')
  }
  return (
    <div className="chat-footer card-footer text-muted">
      <form className="send-message-form">
        <input 
          className="form-control mr-2" 
          type="text" 
          value={value}
          onChange={e => setValue(e.target.value)}
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