let UL_INV = document.getElementById('user-list')

class Colaborador {
  id
  nome
  dataNascimento
  email
  senha

  constructor(id, nome, dataNascimento, email, senha) {
    this.id = id
    this.nome = nome
    this.dataNascimento = dataNascimento
    this.email = email
    this.senha = senha
  }
}

//#region Validação Nome
const validarNome = event => {
  const input = event ? event.target : document.getElementById('nome-input')
  const { value: nome } = input
  let error = document.getElementById('nome-erro')

  let caracteresNome = nome.split(' ').join('')
  let finalName = [...caracteresNome]

  const notNumber = finalName.every(c => isNaN(c))
  const semCaracterEspecial = finalName.every(
    c => c.toUpperCase() !== c.toLowerCase()
  )
  const semEspaço = finalName.some(c => c !== ' ')

  const isValidString = notNumber && semCaracterEspecial && semEspaço

  if (!isValidString) {
    error.classList.remove('d-none')
    error.classList.add('text-danger')
  } else {
    error.classList.add('d-none')
  }
  return isValidString
}

//#region Validação Email
const validarEmail = () => {
  let emailDigitado = document.getElementById('email-input-registration').value
  let listaCaracteres = emailDigitado.split('') // [...emailDigitado]

  let emailSplit = emailDigitado.split('@')

  let possuiArroba = emailSplit.length > 1

  let dominioEmail = possuiArroba ? emailSplit[1] : ''
  let dominioEmailSplit = dominioEmail.split('.')

  let possuiPontosNoDominio = dominioEmailSplit.length > 1

  let possuiCaracteresEntrePontos = dominioEmailSplit.every(d => d.length > 1)

  let comecaComLetra = listaCaracteres.length
    ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase()
    : false

  let ehValido =
    possuiArroba &&
    possuiPontosNoDominio &&
    possuiCaracteresEntrePontos &&
    comecaComLetra

  // para setar o texto de erro em vermelho
  let erroEmail = document.getElementById('email-registration-error')
  erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger')

  return ehValido
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
  let senhaDigitada = document.getElementById(
    'password-input-registration'
  ).value
  let listaCaracteres = senhaDigitada.split('')

  let letras = listaCaracteres.filter(
    char => char.toLowerCase() !== char.toUpperCase()
  )

  let possuiLetraMaiuscula = letras.some(l => l.toUpperCase() === l) // "A".toUppercase() === "A"
  let possuiLetraMinuscula = letras.some(l => l.toLowerCase() === l)

  let possuiCharEspecial = listaCaracteres.some(
    char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char))
  )
  let possuiNumero = listaCaracteres.some(
    char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char))
  )

  let possuiOitoCaracteres = senhaDigitada.length >= 8

  let naoPossuiEspacos = !senhaDigitada.includes(' ')

  let ehValido =
    possuiOitoCaracteres &&
    possuiLetraMaiuscula &&
    possuiLetraMinuscula &&
    possuiCharEspecial &&
    possuiNumero &&
    naoPossuiEspacos

  // para setar o texto de erro em vermelho
  let erroSenha = document.getElementById('password-registration-error')
  erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger')

  return ehValido
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => {
  let inputData = document.getElementById('date-input-registration')
  let dataDigitada = inputData.value

  adicionarMascaraData(inputData, dataDigitada)

  let dataConvertida = moment(dataDigitada, 'DDMMYYYY')

  let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18

  // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
  let dataAnteriorHoje = dataConvertida.isBefore(moment())

  let ehValido =
    dataConvertida.isValid() &&
    dataAnteriorHoje &&
    dezoitoAnosAtras &&
    dataDigitada.length === 10 // 10/05/2001

  // para setar o texto de erro em vermelho
  let erroData = document.getElementById('date-registration-error')
  erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger')

  return ehValido
}

const adicionarMascaraData = (input, data) => {
  let listaCaracteres = [...data]

  let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)))
  if (listaFiltrada && listaFiltrada.length) {
    let dataDigitada = listaFiltrada.join('')

    const { length } = dataDigitada

    switch (length) {
      case 0:
      case 1:
      case 2:
        input.value = dataDigitada
        break
      case 3:
      case 4:
        input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(
          2,
          4
        )}`
        break
      default:
        input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(
          2,
          4
        )}/${dataDigitada.substring(4, 8)}`
    }
  }
}
//#endregion Validação Data

const alternarClasses = (elemento, ...classes) => {
  classes.forEach(classe => {
    elemento.classList.toggle(classe)
  })
}

const irPara = (origem, destino) => {
  const elementoOrigem = document.getElementById(origem)
  const elementoDestino = document.getElementById(destino)

  alternarClasses(elementoOrigem, 'd-none', 'd-flex')
  alternarClasses(elementoDestino, 'd-none', 'd-flex')
}

const validarLogin = () => {
  const emailDigitado = document.getElementById('email-input-login').value
  const senhaDigitada = document.getElementById('password-input-login').value

  axios
    .get(`http://localhost:3000/colaboradores?email=${emailDigitado}`) //Query Parameter
    .then(result => {
      const colabUser = result.data[0]

      const validarSenha = colabUser.senha == senhaDigitada

      //Sei que a senha ficara vulneravel, mas não temos backend para validar com segurança :)
      //Se tive alguma forma desconheço
      if (validarSenha) {
        irPara('login', 'home')
        listarUsuarios()
      } else {
        alert('Senha incorreta')
      }
    })
    .catch(err => {
      const erro = 'Usuário não encontrado'
      alert(erro)
      console.log(`${erro} \n${err}`)
    })
}

const listarUsuarios = () => {
  axios
    .get(`http://localhost:3000/colaboradores`)
    .then(result => {
      UL_INV.textContent = ''
      result.data.forEach(elemento => {
        let idColab = elemento.id
        const li = document.createElement('li')
        li.textContent = elemento.nome
        li.id = idColab

        UL_INV.appendChild(li)
      })
    })
    .catch(err => {
      console.log('Erro ao listar usuários')
    })
}

// ECMAScript - async await 
const buscarUsuarios =  () => {
  const email = document.getElementById('email-input-login').value
  axios
    .get(`http://localhost:3000/colaboradores?email=${email}`)
    .then(result => {
      UL_INV.textContent = ''
      result.data.forEach(elemento => {
        let idColab = elemento.id
        const li = document.createElement('li')
        li.textContent = elemento.nome
        li.id = idColab

        UL_INV.appendChild(li)
      })
    })
    .catch(err => {
      console.log('Erro ao listar usuários')
    })
}

const limparCampos = () => {
  document.getElementById('nome-input').value = ''
  document.getElementById('date-input-registration').value = ''
  document.getElementById('email-input-registration').value = ''
  document.getElementById('password-input-registration').value = ''
}

const validarCadastro = event => {
  event.preventDefault()
  let cadastroValido = validarData() && validarEmail() && validarSenha()
  console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`)

  if (cadastroValido) {
    cadastrarUsuario(event)
  } else {
    limparCampos()
  }
}

const cadastrarUsuario = event => {
  event.preventDefault()
  const inputNome = document.getElementById('nome-input')
  const { value: nome } = inputNome

  const inputData = document.getElementById('date-input-registration')
  const { value: data } = inputData

  const inputEmail = document.getElementById('email-input-registration')
  const { value: email } = inputEmail

  const inputSenha = document.getElementById('password-input-registration')
  const { value: senha } = inputSenha

  const nomeCompleto = nome
    .split(' ')
    .map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase())
    .join(' ')

  const colaborador = new Colaborador(null, nomeCompleto, data, email, senha)

  axios
    .post(`http://localhost:3000/colaboradores`, colaborador)
    .then(sucesso => {
      limparCampos()
      irPara('registration', 'login')
    })
    .catch(erro => {
      console.log('Erro ao cadastrar usuário, tente novamente')
    })
}
