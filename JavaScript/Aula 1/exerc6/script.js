alert(
  'Digite 1 para fazer chekin ou digite 2 para fazer checkout ou 3 para estender hospedagem'
)

let opcoesMenu = parseInt(prompt('Digite a opção desejada'))
if (!isNaN(opcoesMenu) && opcoesMenu > 0 && opcoesMenu <= 3) {
  switch (opcoesMenu) {
    case 1:
      alert('Seja bem-vindo!')
      break
    case 2:
      let confirmacao = confirm('Tem certeza que deseja efetuar o checkout?')
      if (confirmacao === true) {
        alert('Até a próxima')
      } else {
        console.log('Volte ao menu para realizar sua operação!')
      }
      break
    case 3:
      let dias = prompt('Quantos dias você deseja ficar a mais?')
      if (!isNaN(dias) && dias > 0) {
        alert(`Parabéns, Sua estadia foi estendida por ${dias} dias`)
      } else {
        alert(
          'Que pena, não conseguimos estender sua hospedagem. Lembre-se de digitar um número positivo.'
        )
      }
      break
  }
} else {
  console.log('digite um número válido entre 1 e 3')
}
