/*2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
e todos caracteres em maiúsculo;
// ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'*/

/*2a) Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
(porém mantenha ao menos um para continuar com as palavras separadas)
// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'*/

function RetornaStringSemEspaco(frase) {
  return frase.toString().trim().toUpperCase()
}
function RetornaStringSemEspaco(frase) {
  return frase.toString().trim().toUpperCase()
}

let retorno = RetornaStringSemEspaco(
  '    Teste   De  mais uma      vez  funcaio    '
)
console.log(retorno)

function RetornoSemEspacoDuplicado(frase) {
  return frase.toString().replace(/\s{2,}/g, ' ')
}

console.log(RetornoSemEspacoDuplicado(retorno))
