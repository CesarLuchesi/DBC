/* 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
   e essa função imprima no console o valor de cada elemento da lista;
 */

const lista = [1, 'Olá', undefined, 99999, 'Texto qualquer']
function listarLista(lista) {
  for (teste of lista) {
    console.log(teste)
  }
}
listarLista(lista)
