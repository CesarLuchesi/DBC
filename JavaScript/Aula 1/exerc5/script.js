let T1 = parseFloat(prompt('Insira a nota do trabalho 1: '))
let T2 = parseFloat(prompt('Insira a nota do trabalho 2: '))
let P1 = parseFloat(prompt('Insira a nota da prova 1: '))
let media = (T1 + T2 + P1) / 3

if (media >= 7) {
  console.log(`Parabéns voce passou, sua média foi ${media.toFixed(2)}`)
} else if (media >= 5 && media < 7) {
  console.log(`Você ficou em recuperação, sua média foi ${media.toFixed(2)}`)
} else {
  console.log(`Você foi reprovado, sua média foi ${media.toFixed(2)}`)
}
