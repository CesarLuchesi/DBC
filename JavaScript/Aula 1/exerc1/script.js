let infoUser = prompt('Digite um texto: ');

if (infoUser === 'SIM') {
  alert('Parabéns');
} else if (infoUser === 'Não') {
  let infoUser = prompt ("Digite novamente outro texto: ")
  alert(infoUser)
} else {
  confirm('Você tem noções dos seus atos? ')
}
