let aumento = 1.5,
  salario = 1000,
  ano = 2016

do {
  salario = salario + (salario * aumento) / 100
  // aumento = aumento * 2
  ano++
  if (ano == 2018) {
    salario = salario + (salario * aumento) / 100
    aumento = aumento * 2
    ano++
  }
  let salarioTotal = salario.toFixed(2)
  console.log(salarioTotal)
} while (ano <= 2022)
