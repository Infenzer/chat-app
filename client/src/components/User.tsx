import React from 'react'
import { IUser } from '../redux/reducers/users'

type UserProps = IUser

const micOffIcon = <i className="fas fa-microphone-slash"></i>
const micOnIcon = <i className="fas fa-microphone"></i>

const User: React.FC<UserProps> = (props) => {
  const style = {
    backgroundColor: props.messColor
  }
  return (
    <li className="user list-group-item" style={style}> 
      <div className="user-name">
        {props.name}
      </div>
      <div className="user-mic">
        {micOnIcon}
      </div>
    </li>
  )
}

export default User