const randomColor = require('./randomColor')

let users = []

function addUser(id, name, room) {
  const user = {
      id,
      name,
      room,
      messColor: randomColor()
    }

  users.push(user)
  return user
}

function deleteUser(id) {
  users = users.filter(user => {
    return user.id !== id
  })
}

function getUsers(roomName) {
  return users.filter(user => user.room == roomName)
}

module.exports = {
  getUsers,
  addUser,
  deleteUser
}