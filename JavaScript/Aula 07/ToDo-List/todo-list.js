// Criar botão descartar para cada item
let myNodelist = document.getElementsByTagName('LI')
let i
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement('SPAN')
  let txt = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(txt)
  myNodelist[i].appendChild(span)
}

// botão de fechar
let close = document.getElementsByClassName('close')
let = i
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement
    div.style.display = 'none'
  }
}

// adiciona o certo caso o item esteja feito
let list = document.querySelector('ul')
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked')
    }
  },
  false
)

// cria novo elemento
function newElement() {
  let li = document.createElement('li')
  let inputValue = document.getElementById('myInput').value
  let t = document.createTextNode(inputValue)
  li.appendChild(t)
  if (inputValue === '') {
    alert('Escreva algo na lista')
  } else {
    document.getElementById('myUL').appendChild(li)
  }
  document.getElementById('myInput').value = ''

  let span = document.createElement('SPAN')
  let txt = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement
      div.style.display = 'none'
    }
  }
}

// muda o texto caso tenha ou não to do cadastrado
// const changTitleTodo = () => {
//   const titleTodo = document.getElementById('todo-cadastro')
//   if (inputValue === '')
//     titleTodo.textContent = "Nenhum 'To Do' cadastrado ainda"
//   else titleTodo.textContent = 'To Do:'
// }
