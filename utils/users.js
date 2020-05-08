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
  users = users.filter(user => user.id !== id)
}

function getUser(id) {
  return users.find(user => user.id === id)
}


module.exports = {
  users,
  addUser,
  deleteUser,
  getUser
}