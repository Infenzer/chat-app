import io from 'socket.io-client'
import { useDispatch } from 'react-redux'
import {addMess} from '../redux/actions/messAction'
import { useEffect, useMemo } from 'react'

const useSocket = (name: string, room: string,) => {
  const dispatch = useDispatch()
  const socket = useMemo(() => {
    return io()
  }, [])

  useEffect(() => {
    socket.emit('joinRoom', {name, room})

    socket.on('mess', ({mess, name}) => {
      dispatch(addMess(mess, name))
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