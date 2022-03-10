let lista = []

function AddRandomNaLista() {
  let min = Math.ceil(0)
  let max = Math.floor(100)

  while (lista.length < 10) {
    let rdm = Math.floor(Math.random() * (max - min + 1)) + min
    if (rdm % 12 === 0 || (rdm % 2 === 1 && rdm > 14 && rdm < 50))
      lista.push(rdm)
  }
}

AddRandomNaLista()
console.log(lista)
