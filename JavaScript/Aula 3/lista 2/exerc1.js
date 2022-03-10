function removeCaracter(caracter, array) {
  return array.filter(function (item) {
    return item !== caracter
  })
}
console.log(removeCaracter('a', ['c', 'a', 'texto', 'a']))
