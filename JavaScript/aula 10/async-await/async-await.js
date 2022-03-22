let listaColaboradores = [];

// ECMAScript - async await

const buscaColaboradores = async () => {
  try {
    const response = await axios.get('http://localhost:3000/colaboradores');

    listaColaboradores = response.data;

    console.log('Pronto, aqui está minha lista atualizada => ', listaColaboradores);
    console.log('Tamanho da lista => ', listaColaboradores.length);
  }
  catch(erro) {
    console.log('Houve algum erro nesse negócio =>', erro);
  }

  console.log('Aqui está tudo certo, já executei o try catch')
}


buscaColaboradores();
