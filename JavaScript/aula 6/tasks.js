/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

  Colaborador {
    id;
    nome;
    marcacoesPonto; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto( dia, hora );
  };

  Marcacao {
      dia; (só um number mesmo, ex: 22 )
      horas; (também só um number, ex: 9)
  }
  
  Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
  Ex: Validacoes { 
      validaAlgo(valorParaValidar) {
          // imaginem uma lógica validando aqui
          return ehValido;
      }
  }

  Para utilizar essas validações, 

  Ex: const validador = new Validacoes(); // inicializando um validador (vai ser o mesmo global para o sistema, não precisa instanciar mais de 1)
  
  if(validador.validaAlgo('Valor qualquer')) {
      // só pra exemplificar como utilizar
  }

  Vamos criar um sistema da seguinte forma;
  Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;

  As opções serão:

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto;
  3 - Ver Lista de Colaboradores;
  4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  5 - Encerrar;
*/

//array geral colaboradores
let colaboradores = []

//classe do colaborador
class Colaborador {
  id
  nome
  marcarPonto

  constructor(id, nome) {
    this.id = id.somaId
    this.nome = nome
    this.marcarPonto = [] // não sei se tá certo esse array
  }
  static somaId() {
    // tentando fazer mesma logica do ID de antes
    this.id = 1
    if (colaboradores.lenght > 0) {
      this.id = colaboradores[colaboradores.lenght - 1].this.id + 1
    }
  }
  marcacaoDePonto = (dia, hora) => {
    dia = parseInt(prompt('Dia: '))
    hora = parseInt(prompt('Hora: '))

    marcarPonto = new Marcacao({ dia, hora })
  }
}

//classe marca ponto
class Marcacao {
  dia
  horas
  constructor(dia, horas) {
    this.dia = dia
    this.horas = horas
  }
}

//classe para validações começo

class Validacoes {
  //verifica se a lista não está vazia
  verifyList = () => {
    let haveProduct = true
    if (colaboradores.length === 0) {
      haveProduct = false
      alert('Não existe colaboradores cadastrados ainda!')
    }
    return haveProduct
  }
}

//classe para validações fim

// cadastra o nome do colaborador e bater ponto
let i = 0
const cadastrarColaborador = () => {
  let cadastrarNome
  let confirmarCadastro

  do {
    cadastrarNome = prompt('Digite o nome do colaborador:').toLowerCase()

    if (validator.validaNome(cadastrarNome)) {
      //classes para validação que não criei
      if (validator.validaColaborador(cadastrarNome)) {
        alert('Nome ja cadastrado!')
        confirmarCadastro = false
      } else {
        i++
        this.marcarPonto //chamando o array
        const novoColaborador = new Colaborador(
          i,
          cadastrarNome,
          this.marcarPonto
        )
        colaboradores.push(novoColaborador)
        confirmarCadastro = true
      }
    } else {
      alert('Erro! Digite um nome válido!')
      confirmarCadastro = false
    }
  } while (confirmarCadastro === false)
}

//Menu Geral
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
        if (verifyList()) {
          marcacaoDePonto()
        }
        break
      case 3:
        if (verifyList()) {
          listaColaboradores()
        }
        break
      case 4:
        if (verifyList()) {
          listaColaborador()
        }
        break
      case null:
        alert('Sistema Finalizado')
        break
    }
  } while (option != 5 && option !== null)
  alert('Obrigado por utilizar o sistema, saindo ....')
}
alert('Bem vindo ao sistema!!!')
mainMenu()
