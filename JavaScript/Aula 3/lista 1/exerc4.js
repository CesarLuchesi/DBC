/*4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
   existe no array e também qual a posição dele (índice)
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'*/

function Busca(array, elemento) {
  let indexOf = array.indexOf(elemento)
  if (indexOf != -1) {
    console.log(`O elemento existe no array e a posição dele é: ${indexOf}`);
  } else {
    console.log('O elemento não existe no array')
  }
}
Busca(['a', 'cachorro', 255], 'a')
