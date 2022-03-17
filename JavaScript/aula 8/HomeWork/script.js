//Array colaboradores e id global
let id = 0
let collaboratorsList = []

//Classe Colaborador
class Colaborador {
  id
  nome
  data
  email
  senha
  //constructor da classe
  constructor(nome, data, email, senha) {
    this.id = id
    this.nome = nome
    this.data = data
    this.email = email
    this.senha = senha
  }
}

//Validação do nome
const nameValidate = event => {
  const input = event ? event.target : document.getElementById('enter-Name')
  const { value: nome } = input
  let error = document.getElementById('error-Name')

  let charactersName = nome.split(' ').join('')
  let realName = [...charactersName]

  //valida se é letra
  const notNumber = realName.every(c => isNaN(c))
  const withoutspecialFeature = realName.every(
    c => c.toUpperCase() !== c.toLowerCase()
  )

  //valida se não tem espaços
  const noSpace = realName.some(c => c !== ' ')

  const validString = notNumber && withoutspecialFeature && noSpace

  if (!validString) {
    error.classList.remove('d-none')
    error.classList.add('text-danger')
  } else {
    error.classList.add('d-none')
  }
  return validString
}

// Valiodação de email
const emailValidate = event => {
  const input = event ? event.target : document.getElementById('enter-Email')
  const { value: email } = input
  let error = document.getElementById('email-Error')

  let charactersEmail = [...email]

  let primeiroCaracterLetra =
    charactersEmail[0].toUpperCase() !== charactersEmail[0].toLowerCase()
  let possuirArroba = charactersEmail.some(c => c === '@')
  let possuirPonto = charactersEmail.some(c => c === '.')
  let notArrobaPoint = charactersEmail[charactersEmail.indexOf('@') + 1] === '.'
  let naoTerminarComPonto = charactersEmail[charactersEmail.length - 1] !== '.'
  let ownTwoAfterPoint = charactersEmail.some(
    (c, i) =>
      c === '.' &&
      charactersEmail[i + 2] !== undefined &&
      charactersEmail[i + 2].toUpperCase() !==
        charactersEmail[i + 2].toLowerCase()
  )
  let possuirDominio = email.includes('@') && email.includes('dbccompany')

  const isValidt =
    primeiroCaracterLetra &&
    possuirArroba &&
    !notArrobaPoint &&
    possuirDominio &&
    possuirPonto &&
    naoTerminarComPonto &&
    ownTwoAfterPoint

  if (!isValidt) {
    error.classList.remove('d-none')
    error.classList.add('text-danger')
  } else {
    error.classList.add('d-none')
  }

  return isValidt
}

//Validação de senha
const validatePassword = event => {
  const input = event ? event.target : document.getElementById('senha-input')
  const { value: senha } = input
  let error = document.getElementById('senha-erro')

  input.value = input.value.replaceAll(' ', '')

  let caracteresSenha = [...senha]

  let lowercaseLetter = caracteresSenha.some(c => c.toLowerCase() === c)
  let uppercaseLetter = caracteresSenha.some(c => c.toUpperCase() === c)

  let possuiEspecial = caracteresSenha.some(
    c => c.toUpperCase() === c.toLowerCase() && isNaN(c)
  )
  let possuiNumero = caracteresSenha.some(
    c => c.toUpperCase() === c.toLowerCase() && !isNaN(c)
  )

  let peloMenosOito = senha.length >= 8

  const isValidt =
    lowercaseLetter &&
    uppercaseLetter &&
    possuiEspecial &&
    possuiNumero &&
    peloMenosOito

  if (!isValidt) {
    error.classList.remove('d-none')
    error.classList.add('text-danger')
  } else {
    error.classList.add('d-none')
  }

  return isValidt
}

// Máscara no input
const adicionarMascaraData = input => {
  let dateInfo = document.getElementById('data-input').value
  dateInfo = dateInfo.replaceAll('/', '')
  let day = dateInfo.substring(0, 2)
  let month = dateInfo.substring(2, 4)
  let year = dateInfo.substring(4)

  let dateNumbers = [...dateInfo]

  if (dateNumbers.length === 2) {
    document.getElementById('data-input').value = `${day}/`
  } else if (dateNumbers.length === 5) {
    document.getElementById('data-input').value = `${day}/${month}/${year}`
  }
}

//Validação na Data
const validarData = event => {
  const input = event ? event.target : document.getElementById('data-input')
  const { value: data } = input
  let error = document.getElementById('data-error')

  const date = moment()
  const formaDate = moment(data, 'DDMMYYYY')

  const dateIsValid = formaDate.isValid()
  const dateNoFuture = date.isAfter(formaDate)
  const twentySixYears = moment().subtract(26, 'years')
  const eighteenYears = moment().subtract(18, 'years')

  const dateIsBetween = formaDate.isBetween(twentySixYears, eighteenYears)

  const isValidt = dateIsValid && dateNoFuture && dateIsBetween

  if (!isValidt) {
    error.classList.remove('d-none')
    error.classList.add('text-danger')
  } else {
    error.classList.add('d-none')
  }
  return isValidt
}

// Digitando Novo colaborador
const newColab = () => {
  const inputName = document.getElementById('enter-Name')
  const { value: nome } = inputName
  const inputEmail = document.getElementById('enter-Email')
  const { value: email } = inputEmail
  const inputSenha = document.getElementById('senha-input')
  const { value: senha } = inputSenha
  const inputData = document.getElementById('data-input')
  const { value: data } = inputData

  const colab = new Colaborador(nome, data, email, senha)

  collaboratorsList.push(colab)
  id++
  addList()
  return
}
//Adicionando Colaborador a Lista
const addList = () => {
  let div = document.getElementById('id-table')
  let noColab = document.getElementById('no-colab')
  let tBody = document.getElementById('t-body')
  let tr = document.createElement('tr')
  noColab.classList.add('d-none')
  div.classList.remove('d-none')

  tBody.appendChild(tr)

  let tdNome = document.createElement('td')
  let tdNasc = document.createElement('td')
  let tdEmail = document.createElement('td')
  tr.appendChild(tdNome)
  tr.appendChild(tdNasc)
  tr.appendChild(tdEmail)

  const inputName = document.getElementById('enter-Name')
  const { value: nome } = inputName
  const inputData = document.getElementById('data-input')
  const { value: data } = inputData
  const inputEmail = document.getElementById('enter-Email')
  const { value: email } = inputEmail

  let nomeTable = document.createTextNode(nome)
  let nascTable = document.createTextNode(data)
  let emailTable = document.createTextNode(email)
  tdNome.appendChild(nomeTable)
  tdNasc.appendChild(nascTable)
  tdEmail.appendChild(emailTable)
  return
}

//Valida Cadastro
const validateRegistration = event => {
  event.preventDefault()
  let validate =
    nameValidate() && validarData() && emailValidate() && validatePassword()
  console.log(nameValidate())
  console.log(validarData())
  console.log(emailValidate())
  console.log(validatePassword())
  console.log(`Cadastro ${validate ? 'válido!' : 'inválido'}`)
  if (validate) newColab()
}
