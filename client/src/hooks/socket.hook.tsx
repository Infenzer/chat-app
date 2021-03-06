import { useDispatch } from 'react-redux'
import {addMess} from '../redux/actions/messAction'
import { useEffect, useMemo } from 'react'
import { loadUsers, userDisconnect } from '../redux/actions/userAction'
import socket, { joinRoom } from '../socket'

const useSocket = (name: string, room: string) => {
  const dispatch = useDispatch()
  useMemo(() => socket.open(), [])

  useEffect(() => {
    let muteList = []
    // joinRoom socket
    joinRoom(name, room)
    socket.on('joinRoom', users => {
      dispatch(loadUsers(users))
    })

    // leaveRoom
    socket.on('leaveRoom', ({id}) => {
      socket.emit('mute', id, 'delete')
      dispatch(userDisconnect(id))
    })

    // Message socket
    socket.on('mess', (mess) => {
      const {
        text,
        name,
        messColor,
        ownerId
      } = mess
  
      if (!muteList.includes(ownerId)) {
        dispatch(addMess(text, name, messColor))
      }
    })

    // Mute
    socket.on('mute', muteL => {
      muteList = muteL
    })

    return () => {
      dispatch(userDisconnect(socket.id))
      socket.close()
    }
  }, [])
}

export default useSocket