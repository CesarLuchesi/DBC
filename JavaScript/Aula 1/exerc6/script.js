alert(
  'Digite 1 para fazer chekin ou digite 2 para fazer checkout ou 3 para estender hospedagem ou 4 para sair'
)

let menu = parseInt(prompt('Digite a opção desejada'))
if (!isNaN(menu) && menu > 0 && menu <= 4) {
  switch (menu) {
    case 1:
      alert('Seja bem-vindo!')
      break
    case 2:
      let checkout = confirm('Tem certeza que deseja efetuar o checkout?')
      if (checkout === true) {
        alert('Até logo e volte sempre')
      } else {
        console.log('Volte ao menu para realizar sua operação!')
      }
      break
    case 3:
      let dias = prompt('Por quantos dias você deseja estendar sua hospedagem?')
      if (!isNaN(dias) && dias > 0) {
        alert(`Obrigado, sua estadia foi estendida por ${dias} dias`)
      } else {
        alert('Infelizmente não conseguimos estendar a sua hospedagem.')
      }
      break
    case 4:
      alert('Ok')
      break
  }
} else {
  console.log('digite um número válido entre 1 e 4')
}
