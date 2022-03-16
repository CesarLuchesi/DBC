//validações

class Validacoes {
  valorEstaPresente(valor) {
    return valor !== '' || valor !== valor || valor !== undefined
  }

  validaNumero() {
    return !isNaN(valor) && this.valorEstaPresente(valor)
  }
}

let colaboradores = []

let idSistema = 0

//classe colaborador
class Colaborador {
  id = 0
  nome = ''
  marcacoesPonto = []

  constructor(nnome) {
    this.id = idSistema++
    this.nome = nome
  }
  marcacoesPonto(dia, hora) {
    this.marcacoesPonto.push(new Marcacao(dia, hora))
  }
}

//classe marcação de horas
class Marcacao {
  dia
  horas

  constructor(dia, hora) {
    this.dia = dia
    this.hora = hora
  }
}

// const validador

//cadastrar colaborador
const cadastrarColaborador = () => {
  const nome = prompt('Informe o nome do colaborador')

  if (nome === '' || nome !== null) {
    alert('Nome inválido, digite novamente')
    cadastrarColaborador()
    return
  }
  const colab = new colaboradores(nome)
  colaboradores.push(colab)
  console.log('Sucesso!')
}
const marcarPonto = () => {
  const idColab = parseInt(prompt('Informe o nome do colaborador'))
  const dia = parseFloat(prompt('Informe o dia'))
  const horas = parseFloat(prompt('Informe as hors:'))

  const colaborador = colaboradores.find(c => c.id === idcolab)
  colaborador.marcarPonto(dia, horas)
}

//listar colaboradores

const listarColaboradores = () => {
  console.log('Lista de colaboradores')
  colaboradores.forEach(c => {
    console.log(c)
  })
}
//listar sem ponto

const listarSemPonto = () => {
  const colaboradoresSemPonto = colaboradores.filter(
    c => c.marcacoesPonto.lenght === 0
  )
}

//menu principal
const mainMenu = () => {
  let option

  do {
    option = parseInt(
      prompt(
        'Digite a opção desejada: \n1 - Cadastrar colaborador \n 2 - Marcar Ponto \n3 - Ver Lista de Colaboradores \n 4 - Listar Colaboradores que não bateram ponto \n 5 - Encerrar'
      )
    )
    switch (option) {
      case 1:
        cadastroColaborador()
        break
      case 2:
        {
          marcacaoDePonto()
        }
        break
      case 3:
        {
          listaColaboradores()
        }
        break
      case 4:
        {
          listaColaborador()
        }
        break
      case 9:
        break
      default:
        alert('Opção inválida')(mainMenu)
        break
    }
  } while (option != 5 && option !== null)
  alert('Obrigado por utilizar o sistema, saindo ....')
}

//INICIA O SISTEMA
mainMenu()
