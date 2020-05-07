import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { showAlert, hideAlert } from '../redux/actions/visibleAlert'

const JoinChatForm: React.FC = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('JavaScript')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (name === '') {
      dispatch(showAlert('WARNING', 'Введите имя'))

      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    } else {
      history.push(`/chat/${name}/${room}`)
      dispatch(hideAlert())
    }
  }

  return (
    <form className="join-chat-form">
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input 
          className="form-control" 
          type="text" 
          id="name" 
          placeholder='Вася'
          onChange={e => setName(e.target.value)}
          value={name} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="room">Комната</label>
        <select 
          className="form-control"
          id="room" value={room} 
          onChange={e => setRoom(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="RussianLan">Русский язык</option>
        </select>
      </div>
      <input 
        className="form-control" 
        type="submit" 
        value="Присоединиться"
        onClick={e => handleClick(e)}
      />
    </form>
  )
}

export default JoinChatForm