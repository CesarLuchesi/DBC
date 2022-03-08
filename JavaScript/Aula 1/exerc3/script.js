/* pergunta01 */
let isFriday = confirm('Hoje é sexta-feira ?')
console.log(isFriday)

/* pergunta02 */
let isTwoGreaterThanFour = 2 < 4
console.log(isTwoGreaterThanFour)

/* pergunta03 */
let isValueEmpty
let valor = prompt('Insira um valor?')
isValueEmpty = valor === null || valor === undefined || valor === ''
console.log(`O valor da variavel é ${isValueEmpty}`)
