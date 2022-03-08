/* pergunta variável 1 */
let isFriday = confirm('Hoje é sexta-feira ?')
console.log(Boolean(isFriday))

/* pergunta variável 2 */
let isTwoGreaterThanFour = Boolean(2 > 4)
console.log(isTwoGreaterThanFour)

/* pergunta variável 3 */
let isValueEmpty
let valor = prompt('Insira um valor?')
isValueEmpty = Boolean(valor === null || valor === undefined || valor === '')
console.log(`O valor da variavel é ${isValueEmpty}`)
