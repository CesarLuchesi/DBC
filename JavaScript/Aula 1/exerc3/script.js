/* pergunta variável 1 */
let isFriday = 'Hoje é sexta-feira ?'
console.log(Boolean(isFriday))

/* pergunta variável 2 */
let isTwoGreaterThanFour = 2 > 4
console.log(isTwoGreaterThanFour)

/* pergunta variável 3 */
let isValueEmpty
let valor = prompt('Insira um valor?')
isValueEmpty = valor === null || valor === undefined || valor === ''
console.log(`O valor da variavel é ${isValueEmpty}`)
