import io from 'socket.io-client'
import { useDispatch } from 'react-redux'
import {addMess} from '../redux/actions/messAction'
import { useEffect, useMemo } from 'react'
import { loadUsers, userDisconnect } from '../redux/actions/userAction'

const useSocket = (name: string, room: string,) => {
  const dispatch = useDispatch()
  const socket = useMemo(() => {
    return io()
  }, [])

  useEffect(() => {
    // joinRoom socket
    socket.emit('joinRoom', {name, room})

    socket.on('joinRoom', ({ users }) => {
      dispatch(loadUsers(users))
    })

    // leaveRoom
    socket.on('leaveRoom', ({id}) => {
      dispatch(userDisconnect(id))
    })

    // Message socket
    socket.on('mess', ({text, name, messColor}) => {
      dispatch(addMess(text, name, messColor))
    })
  }, [])

  const sendMessClick = (text: string) => {
    if (text !== '') {
      socket.emit('mess', {mess: text, name})
    }
  }

  return {
    sendMessClick
  }
}

export default useSocket