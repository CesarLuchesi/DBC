function ordenaCrescente(array) {
  var length = array.length
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var aux = array[j]
        array[j] = array[j + 1]
        array[j + 1] = aux
      }
    }
  }
}

console.log(ordenaCrescente([5, 4, 3, 2, 1]))
