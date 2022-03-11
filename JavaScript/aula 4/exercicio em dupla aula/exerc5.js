// 5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
//   // ex: imprimirCombinacoes('tri')
//   => possiveis combinações da string "tri":
//   't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 'rit', 'rti', 'i', 'ir', 'it', 'irt', 'itr'

function pegarSegundoMaiorEMenor(str) {
    let arrayCombinado = []
    let array = str.split('')
    let auxiliar = ''
  
    for (let i = 0; i < array.length; i++) {
      auxiliar += array[i]
      arrayCombinado.push(auxiliar)
  
      for (let j = 0; j < array.length; j++) {
        if (i != j) {
          auxiliar += array[j]
          arrayCombinado.push(auxiliar)
        }
      }
      auxiliar = array[i]
      for (let k = array.length - 1; k >= 0; k--) {
        if (i != k) {
          auxiliar += array[k]
          arrayCombinado.push(auxiliar)
        }
      }
      auxiliar = ''
    }
    return arrayCombinado
  }
  console.log(pegarSegundoMaiorEMenor('cesar'))
  
