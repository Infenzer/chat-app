const express = require('express')
const webpack = require('webpack')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

// Util
const {
  getUser,
  addUser,
  users,
  deleteUser
} = require('./utils/users')

// Const
const botName = 'Чат Бот'

// Socket
io.on('connection', socket => {
  // JoinRoom
  socket.on('joinRoom', ({name, room}) => {
    const user = addUser(socket.id, name, room)

    socket.join(user.room)

    const resMess = {
      text: `${user.name} присоединился.`,
      name: botName,
      messColor: '#fff'
    }
    socket.to(user.room).broadcast.emit('mess', resMess)
  })

  // SendMessage
  socket.on('mess', ({mess}) => {
    const user = getUser(socket.id)

    const resMess = {
      text: mess,
      name: user.name,
      messColor: user.messColor
    }

    io.to(user.room).emit('mess', resMess)
  })

  socket.on('disconnect', () => {
    const user = getUser(socket.id)

    if (user) {
      const resMess = {
        text: `${user.name} вышел.`,
        name: botName,
        messColor: '#fff'
      }
      socket.to(user.room).broadcast.emit('mess', resMess)
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