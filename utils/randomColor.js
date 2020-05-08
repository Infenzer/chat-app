const randomColor = () => {
  let color = '#'

  for (let i = 0; i < 6; i++) {
    let min = 0
    const max = 15

    // Отсеивание слишком тёмных тонов
    if (i === 0) {
      min = 6
    }

    let randomNum = Math.floor(Math.random() * (max - min)) + min
    
    color += randomNum.toString(16)
  }

  return color
}

module.exports = randomColor