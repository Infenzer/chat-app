const botName = 'Чат Бот'

function botMessage (text) {
  const mess = {
    text: text,
    name: botName,
    messColor: '#fff',
    ownerId: botName
  }
  
  return mess
}

module.exports = botMessage