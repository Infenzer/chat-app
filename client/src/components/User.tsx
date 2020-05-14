import React, { useState } from 'react'
import { IUser } from '../redux/reducers/users'
import socket, { muteClick } from '../socket'

type UserProps = IUser

const micOffIcon = <i style={{color: 'black'}} className="fas fa-microphone-slash"></i>
const micOnIcon = <i style={{color: 'black'}} className="fas fa-microphone"></i>

const User: React.FC<UserProps> = (props) => {
  const [mute, setMute] = useState(false)
  const style = {
    backgroundColor: props.messColor
  }

  const handleClick = () => {
    setMute((prevState) => !prevState)

    if (!mute) {
      muteClick(props.id, 'add')
    } else {
      muteClick(props.id, 'delete')
    }
  }

  return (
    <li className="user list-group-item" style={style}> 
      <div className="user-name">
        {props.name}
      </div>
      {socket.id !== props.id && (
        <a className="user-mic" href="#" onClick={() => handleClick()}>
          {mute 
            ? micOffIcon
            : micOnIcon
          }
        </a>
      )}
    </li>
  )
}

export default User