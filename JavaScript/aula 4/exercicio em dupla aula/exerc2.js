// 2) Crie uma função que recebe um arrayay de números e encontre o segundo menor e o segundo maior número do arrayay
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, imprime: 3 e imprime: 7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, imprime somente o: 3

var arrayNumbers = [1, 3, 5, 7, 9]
var arrayAux = []

function pegarSegundoMaiorEMenor() {
  for (var j = 0; j < arrayNumbers.length; j++) {
    for (var i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] < arrayNumbers[i + 1]) {
        var temp = arrayNumbers[i]
        arrayNumbers[i] = arrayNumbers[i + 1]
        arrayNumbers[i + 1] = temp
      }
    }
  }
  var segundoMaior = arrayNumbers[1]
  var segundoMenor = arrayNumbers[arrayNumbers.length - 2]
  if (segundoMaior === segundoMenor) {
    return `${segundoMaior}`
  } else {
    return `${segundoMenor} ${segundoMaior}`
  }
}
console.log(pegarSegundoMaiorEMenor(arrayNumbers))
