let nota01 = parseFloat(prompt('Insira o valor da primeira nota: '))
let nota02 = parseFloat(prompt('Insira o valor da segunda nota: '))
let nota03 = parseFloat(prompt('Insira o valor da terceira nota: '))
let media = (nota01 + nota02 + nota03) / 3

if (media >= 7) {
  console.log(`Parabéns sua média foi ${media.toFixed(2)}`)
} else if (media >= 5 && media < 7) {
  console.log(`Você ficou em recuperação, sua média foi ${media.toFixed(2)}`)
} else {
  console.log(`Você foi reprovado, sua média foi ${media.toFixed(2)}`)
}
