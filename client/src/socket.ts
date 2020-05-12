import io from 'socket.io-client'

const socket = io({
  autoConnect: false
})

export const muteClick = (id: string, options: string) => {
  socket.emit('mute', id, options)
}

export const sendMessClick = (text: string) => {
  if (text !== '') {
    socket.emit('mess', {mess: text, name})
  }
}

export const joinRoom = (name: string, room: string) => {
  socket.emit('joinRoom', {name, room})
}

export const messListener = (text: string, id: string) => {
  if (text.length > 0) {
    socket.emit('messListener', id, true)
  } else {
    socket.emit('messListener', id, false)
  }
}

export default socket