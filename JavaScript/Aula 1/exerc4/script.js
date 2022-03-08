let var1 = parseFloat(prompt('Insira o primeiro valor: '))
let var2 = parseFloat(prompt('Insira o segundo valor: '))
let operadores = prompt(
  "Digite um operador, operações válidas: '+', '-', '*', '/')"
)

if (!isNaN(var1) && !isNaN(var2) && var1 / var2 ) {
  switch (operadores) {
    case '+':
      alert(`O resultado da soma: ${var1 + var2}`)
      break
    case '-':
      alert(`O resultado da subtração: ${var1 - var2}`)
      break
    case '*':
      alert(`O resultado da multiplicação: ${var1 * var2}`)
      break
    case '/':
      if(var2=0)
      alert ('Não é possível realizar divisão por 0')
      alert(`O resultado da divisão: ${var1 / var2}`)
      break
    default:
      alert('operador inválido')
  }
} else {
  alert('Numeros inválidos')
}
