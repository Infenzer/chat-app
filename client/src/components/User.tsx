import React, { useState } from 'react'
import { IUser } from '../redux/reducers/users'

type UserProps = IUser & {
  logInUser: string
  muteClick: (id: string, options: string) => void
}

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
      props.muteClick(props.id, 'add')
    } else {
      props.muteClick(props.id, 'delete')
    }
  }

  return (
    <li className="user list-group-item" style={style}> 
      <div className="user-name">
        {props.name}
      </div>
      {props.logInUser !== props.id && (
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