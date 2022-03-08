let num1 = parseFloat(prompt('Insira o primeiro valor: '))
let num2 = parseFloat(prompt('Insira o segundo valor: '))
let operador = prompt(
  "Digite um operador, operações válidas: '+', '-', '*', '/')"
)

if (!isNaN(num1) && !isNaN(num2) && num1 / num2 !== Infinity) {
  switch (operador) {
    case '+':
      alert(`O resultado da soma: ${num1 + num2}`)
      break
    case '-':
      alert(`O resultado da adição: ${num1 - num2}`)
      break
    case '*':
      alert(`O resultado da multiplicação: ${num1 * num2}`)
      break
    case '/':
      alert(`O resultado da divisão: ${num1 / num2}`)
      break
    default:
      alert('operador inválido')
  }
} else {
  alert('Numeros inválidos, lembre-se de não dividir por zero')
}
