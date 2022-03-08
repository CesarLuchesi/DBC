let question

while (question !== 2) {
  question = parseInt(
    prompt(
      'Escolha uma das opções: 1 - Continuar perguntando 2 - Parar de perguntar'
    )
  )
  question > 2 ? alert('Opção inválida, digite novamente') : null
}
