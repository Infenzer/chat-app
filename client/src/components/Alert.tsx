import React from 'react'
import { AlertProps } from '../containers/VisibleAlert'
import {CSSTransition} from 'react-transition-group'

const Alert: React.FC<AlertProps> = (props) => {
  const handleClick = () => {
    props.hideAlert()
  }

  let type = ''
  let className = ''
  switch (props.type) {
    case 'ERROR':
      type = 'Ошибка!'
      className = "alert alert-danger alert-dismissible"
      break
    case 'SUCCESS':
      type = 'Успех!'
      className = "alert alert-success alert-dismissible"
      break
    case 'WARNING': 
      type = 'Внимание!'
      className = "alert alert-warning alert-dismissible"
      break
  }
  return (
    <CSSTransition
      in={props.visible}
      timeout={{
        enter: 600,
        exit: 450
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={className} role="alert">
        <strong> {type} </strong> {props.text}
        <button type="button" className="close" onClick={() => handleClick()} aria-label="Close">
          <span>&times;</span>
        </button>
      </div>
    </CSSTransition>
  )
}

export default Alert