import React from 'react'

interface MessageProps {
  text: string
  name: string
  time: Date
  color: string
}

const Message: React.FC<MessageProps> = (props) => {
  const style = {
    backgroundColor: props.color
  }

  return (
    <li>
      <div className="message alert" style={style} role="alert">
        <h6>
          <b> {props.name} </b>
          <span className="message-time"> {props.time.toLocaleTimeString()} </span>
        </h6>
        <p> {props.text} </p>
      </div>
    </li>
  )
}
 
export default Message