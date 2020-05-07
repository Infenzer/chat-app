const express = require('express')
const webpack = require('webpack')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

// Util
let users = []

function addUser(id, name, room) {
  const user = {id, name, room}

  users.push(user)

  return user
}

function deleteUser(id) {
  users = users.filter(user => user.id !== id)
}

function getUser(id) {
  return users.find(user => user.id === id)
}

// Socket
io.on('connection', socket => {
  // JoinRoom
  socket.on('joinRoom', ({name, room}) => {
    const user = addUser(socket.id, name, room)

    socket.join(user.room)

    socket.to(user.room).broadcast.emit('mess', `${user.name} присоеденился.`)
  })

  // SendMessage
  socket.on('mess', ({mess}) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('mess', mess)
  })

  socket.on('disconnect', () => {
    const user = getUser(socket.id)

    if (user) {
      socket.to(user.room).broadcast.emit('mess', `${user.name} вышел.`)
      deleteUser(user.id)
    }
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