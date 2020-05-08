import React from 'react'
import { IUser } from '../redux/reducers/users'

type UserProps = IUser

const User: React.FC<UserProps> = (props) => {
  const style = {
    backgroundColor: props.messColor
  }
  return (
    <li className="user list-group-item" style={style}> {props.name} </li>
  )
}

export default User