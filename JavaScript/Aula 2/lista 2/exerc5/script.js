let relogio = 0

const contador = setInterval(() => {
  if (relogio < 10) {
    console.log(`0${relogio}`)
  } else {
    console.log(relogio)
  }
  if (relogio < 60) {
    relogio++
  } else {
    clearInterval(contador)
  }
}, 1000)
