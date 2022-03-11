// 4) Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
//   da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
  
//   // ex: contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D')  
//   =>  imprime:  A string "Oi, tenho 5 anos de idade!!! ;D" tem 10 vogais e 9 consoantes


let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const verificaVogaisOuConsoantes = (texto) => {
  let textoMinusculo = texto.toLowerCase()
  let textoSeparado = textoMinusculo.split('')
  let iVogal = 0;
  let iConsoante = 0;
  for (let i = 0; i < textoSeparado.length; i++) {
    for (let y = 0; y < consoantes.length; y++) {
      if (textoSeparado[i] === vogais[y]) {
      iVogal++
      } else if (textoSeparado[i] === consoantes[y]) {
        iConsoante++
      }

    }
  }
  console.log(`A string ${texto} tem ${iVogal} vogais e ${iConsoante} consoantes`)
}

verificaVogaisOuConsoantes('Oi, tenho 5 anos de idade!!! ;D')