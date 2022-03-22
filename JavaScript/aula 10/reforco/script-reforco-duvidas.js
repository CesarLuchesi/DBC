let colaboradores = [];
const BASE_URL = 'http://localhost:3000/colaboradores';


const buscar = () => {
  axios.get(BASE_URL)
    .then( (response) => {
      response.data.forEach( (e) => {
        colaboradores.push()
      })
    })
}



const cadastrar = () => {
  const input = document.getElementById('input-nome');

  const colaborador = { nome: input.value };

  axios.post(BASE_URL, colaborador)
    .then( (response) => {
      console.log('Aqui foi inserido =>', response.data);
      colaboradores.push(response.data);

      console.log('Aqui está a lista atualizada e o seu novo length =>', colaboradores, colaboradores.length);
    }, 
    (erro) => {
      console.log("Deu um erro =>", erro)
    })

}



const editar = (id) => {
  const input = document.getElementById('input-nome');
  
  const colaborador = { nome: input.value };

  axios.put(`${BASE_URL}/${id}`, colaborador)
    .then( (response) => {
      console.log('Retorno do PUT =>', response.data);
    })
}



const excluir = (id) => {
  axios.delete(BASE_URL + '/' + id)
    .then( (response) => {
      const colabElemento = document.getElementById(`colab-${id}`);
      colabElemento.remove();

      console.log('Foi deletado =>', response.data);
    })
}