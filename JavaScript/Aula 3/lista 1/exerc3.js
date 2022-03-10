/*3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja chamada caso algum dos números informados seja inválido. 
Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';
*/
function callbackFunction() {
  console.log('Algum número digitado foi inválido')
}
function Soma(a, b, callback) {
  if (isNaN(a) || isNaN(b)) return callback()
  let retorno = a + b
  console.log(retorno)

  return retorno
}

Soma(1, 4, callbackFunction)
