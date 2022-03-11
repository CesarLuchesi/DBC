// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//    // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

const primeiraLetraMaiuscula = string => {
  let separaString = string.split(' ')
  let arrayCompleta = []
  let arrayConvertida
  for (let i = 0; i < separaString.length; i++) {
    let primeiraLetra = separaString[i].charAt(0).toUpperCase()
    let arrayCortado = separaString[i].slice(1)
    let arrayFormatada = primeiraLetra.concat(arrayCortado)
    arrayCompleta.push(arrayFormatada)
  }
  return (arrayConvertida = arrayCompleta.join(' '))
}

primeiraLetraMaiuscula('hoje Faremos o trabalho em dupla, que legal - sqn')
