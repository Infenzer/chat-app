const botName = 'Чат Бот'

function botMessage (text) {
  const mess = {
    text: text,
    name: botName,
    messColor: '#fff'
  }
  
  return mess
}

module.exports = botMessage