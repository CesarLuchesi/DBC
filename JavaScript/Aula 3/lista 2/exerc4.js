let lista = []

function Add(elemento) {
  lista.push(elemento)
}

function RemoveFirst() {
  lista.shift()
}

function RemoveLast() {
  lista.pop()
}

function RemoveElemento(elemento) {
  let indexOf = lista.indexOf(elemento)
  if (indexOf != -1) {
    let aux = lista.filter(function (item) {
      return item !== caracter
    })
    lista = aux
  } else {
    console.log('O elemento não existe no array')
  }
}
