/*
  +============================================================+
  |                    CADASTRO DE PRODUTOS                    |
  +============================================================+

  Obs: Utilizem Arrow Functions;

  Imaginando que teremos o seguinte produto:
  
  (modelo do objeto)
  {
    id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
    descricao: "",  (string)
    preco: 0        (number)
  }

  Teremos também uma lista de produtos que será uma variável de escopo global no sistema (let, não utilizem var);

  Criem um sistema onde seja possível:

  1) Cadastrar um produto;
    - cuidado para não ter o mesmo id (identificador);

  2) Excluir um produto pelo código;

  3) Encontrar um produto pelo código;

  4a) Imprimir no console em tabela a lista de produtos cadastrados;

  4b) Imprimir no console em tabela a lista de descrições dos produtos cadastrados;

  4c) Selecionar uma descrição desejada e:
    Imprimir no console em tabela somente a descrição e preço dos produtos que possuem aquela descrição escolhida; 

  5) Verificar o total de patrimônio da loja (preço total de todos os produtos);
  
  6) Verificar se todos os produtos cadastrados possuem um preço válido;

  7) sair
*/

let listGenericProduct = []

//Menu Geral
const mainMenu = () => {
  let option

  do {
    option = parseInt(
      prompt(
        'Digite a opção desejada: \n1 - Cadastrar produto \n 2 - Remover produto \n3 - procurar produto \n 4 - Lista produtos e mais \n 5 - Verificar patrimonio da loja\n6 - Verificar preços válidos \n7 - Sair'
      )
    )
    switch (option) {
      case 1:
        registerProduct()
        break
      case 2:
        if (verifyList()) {
          deleteProduct()
        }
        break
      case 3:
        if (verifyList()) {
          findProduct()
        }
        break
      case 4:
        if (verifyList()) {
          listProduct()
        }
        break
      case 5:
        if (verifyList()) {
          allProducts()
        }
        break
      case 6:
        if (verifyList()) {
          let validate = listGenericProduct.every(product => product.price > 0)
          if (validate) {
            alert('Todos os preços estão válidos.')
          } else {
            alert('Existem produtos com preço inválido.')
          }
        }
        break
    }
  } while (option != 7)
  alert('Obrigado por utilizar o sistema, saindo ....')
}

// verifica se tem produtos na lista
const verifyList = () => {
  let haveProduct = true

  if (listGenericProduct.length === 0) {
    haveProduct = false
    alert('Não existe produtos cadastrados ainda!')
  }

  return haveProduct
}

//Menu do case 4
const listProduct = () => {
  let option
  option = parseInt(
    prompt(
      'Digite a opção desejada: \n1 - Imprimir lista de produtos cadastrados\n2 - Imprimir lista de descrição dos produtos cadastrados\n3 - Encontrar Produto por descrição e consultar preço dele\n4 - Voltar'
    )
  )
  switch (option) {
    case 1:
      console.table(listGenericProduct)
      break
    case 2:
      console.table(listGenericProduct, ['description'])
      break
    case 3:
      let findDescription = prompt(
        'Digite a descrição do produto que deseja encontrar: '
      )
      let foundProducts = listGenericProduct.filter(product =>
        product.description
          .toLowerCase()
          .includes(findDescription.toLowerCase())
      )
      console.table(foundProducts)
      break
    case 4:
      mainMenu()
      break
  }
}

//função para registrar produtos
const registerProduct = () => {
  let id = 1

  if (listGenericProduct.length > 0) {
    id = listGenericProduct[listGenericProduct.length - 1].id + 1
  }

  let description
  let price

  let questionsAnswer = true
  while (questionsAnswer) {
    description = prompt('Digite a descrição do produto: ')
    price = parseFloat(prompt('Digite o preço do produto: '))

    let validateNumbers = isNaN(id) || isNaN(price)
    let validateText = description.length < 1 || description == ' '

    if (validateNumbers || validateText) {
      alert('Por favor, digite os dados corretamente.')
    } else {
      questionsAnswer = false
    }
  }
  const Product = {
    id: id,
    description: description,
    price: price
  }

  let confirmUser = confirm(
    `Deseja cadastrar o produto '${Product.description}' com o preço de R$ ${Product.price}?`
  )
  if (confirmUser) {
    alert(
      `Produto cadastrado com sucesso!\nId: ${id}\nDescrição: ${description}\nPreço: R$ ${price}`
    )
    listGenericProduct.push(Product)
  } else {
    alert('Cadastro cancelado!')
  }
}

//função para procurar produto pelo ID
const findProduct = () => {
  let id
  let productFound

  let questionsAnswer = true
  while (questionsAnswer) {
    id = parseInt(prompt('Digite o Id do produto que deseja encontrar: '))
    productFound = listGenericProduct.find(p => id == p.id)

    let validateNumbers = isNaN(id)
    if (validateNumbers) {
      alert('Por favor, digite um Id válido.')
    } else if (!productFound) {
      alert('Não foi encontrado nenhum produto com este Id.')
    } else {
      questionsAnswer = false
    }
  }

  alert(
    `Id do seu produto - ${productFound.id}\nDescrição - '${productFound.description}'\nPreço R$ ${productFound.price}`
  )
}

// Função para retornar o valor total dos produtos
const allProducts = () => {
  let sum = 0
  listGenericProduct.forEach(product => {
    sum += product.price
  })

  alert(`A soma dos produtos é ${sum.toFixed(2)}`)
}

//função para remover produto pelo ID
const deleteProduct = () => {
  let id

  let product
  let questionsAnswer = true
  while (questionsAnswer) {
    id = parseInt(prompt('Digite o Id do produto que deseja remover: '))
    product = listGenericProduct.find(p => id == p.id)

    let validateNumbers = isNaN(id)
    if (validateNumbers) {
      alert('Por favor, digite um ID válido.')
    } else if (!product) {
      alert('Não foi encontrado produto com este Id.')
    } else {
      questionsAnswer = false
    }
  }

  let newArray = listGenericProduct.filter(p => id != p.id)

  console.log(product)

  let confirmUser = confirm(
    `Deseja remover o produto '${product.description}' com o preço de R$ ${product.price}?`
  )
  if (confirmUser) {
    alert(
      `O produto foi removido\nId: ${id}\nDescrição: ${product.description}\nPreço: R$ ${product.price}`
    )
    listGenericProduct = newArray
  } else {
    alert('Operação cancelada')
  }
}
alert('Bem-vindo!')
mainMenu()
