const express = require('express')
const webpack = require('webpack')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

// Util
const {
  addUser,
  getUsers,
  deleteUser
} = require('./utils/users')
const botMessage = require('./utils/bot')

// Socket
io.on('connection', socket => {
  let muteList = []
  // JoinRoom
  socket.on('joinRoom', ({name, room}) => {
    const user = addUser(socket.id, name, room)
    const users = getUsers(user.room)
    socket.join(user.room)

    const resMess = botMessage(`${user.name} присоединился.`)
    socket.to(user.room).broadcast.emit('mess', resMess)

    io.to(user.room).emit('joinRoom', users)

     // SendMessage
    socket.on('mess', ({mess}) => {
      const resMess = {
        text: mess,
        name: user.name,
        messColor: user.messColor,
        ownerId: user.id
      }

      io.to(user.room).emit('mess', resMess)
    })

    // Mute
    socket.on('mute', (muteUserId, options) => {
      if (options === 'delete') {
        muteList = muteList.filter(muteId => muteId !== muteUserId)
      } else {
        muteList.push(muteUserId)
      }
      
      socket.emit('mute', muteList)
    })

    // Message listener
    socket.on('messListener', (id, active) => {
      const user = users.find(user => user.id === id)
      io.to(user.room).emit('messListener', {id, name: user.name}, active)
    })
    
    // Disconnect
    socket.on('disconnect', () => {
      if (user) {
        const resMess = botMessage(`${user.name} вышел.`)

        socket.to(user.room).broadcast.emit('mess', resMess)
        socket.to(user.room).broadcast.emit('leaveRoom', { id: socket.id })
      }
      deleteUser(socket.id)
    })
  })
})

start()

function start() {
  app.use(require('connect-history-api-fallback')())
  webpackDevMiddleware()

  server.listen(3000, () => {
    console.log('Server started...')
  })
}

function webpackDevMiddleware() {
  const webpackConfig = require('./webpack.config.dev.js')
  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require("webpack-hot-middleware")(compiler))
}