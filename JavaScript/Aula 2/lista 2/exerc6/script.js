let numbersArray = []
let numbers = 0

do {
  insertNumber = parseInt(prompt('1 - Inserir número \n 2 - Finalizar'))
  if (insertNumber === 1) {

    let selectedNumbers = parseInt(prompt('Digite um número: '))

    if (!isNaN(selectedNumbers)) {
      numbersArray.push(selectedNumbers)
      numbers += selectedNumbers

    } else {
      alert('Digite um numero valido')
    }
  }
} while (insertNumber !== 2)

alert(`A soma dos numeros ${numbersArray} é : ${numbers}`)
