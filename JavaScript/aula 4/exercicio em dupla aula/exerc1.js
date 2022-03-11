// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);

let elementoNumero = (370914)
let revertArray = [];

const revertNumero = (numero) => { 
  let numeroString = numero.toString();
  let invertNum = numeroString.split('')
  for (let i = invertNum.length; i >= 0 ; i--) {
    revertArray.push(invertNum[i])
  }
  let stringFormatada = revertArray.join('')
  let stringFormatadaParaNumero = parseInt(stringFormatada)
  return stringFormatadaParaNumero
} 
revertNumero(elementoNumero)