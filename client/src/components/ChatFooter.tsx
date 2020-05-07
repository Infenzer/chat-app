import React, { useState } from 'react'

type ChatFooterProps = {
  onClick: (text: string) => void
}

const СhatFooter: React.FC<ChatFooterProps> = (props) => {
  const [value, setValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    props.onClick(value)

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