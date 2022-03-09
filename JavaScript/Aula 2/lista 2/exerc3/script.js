let valor
let tabuada = ''

valor = prompt('Digite um número de uma tabuada para ser calculada')

for (let contador = 1; contador <= 10; contador++) {
  tabuada += valor + ' x ' + contador + ' = ' + valor * contador + '\n'
}
prompt(tabuada)

