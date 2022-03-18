const assarBolo = () => {
    console.log('Começou a assar')
    const titulo = document.getElementById('titulo');
    titulo.textContent = 'Assando o bolo, aguarde...';
    return new Promise((resolve, reject) => {
        // imaginem um monte de código aqui para assar o bolo...

        setTimeout(() => {
            resolve();
            titulo.textContent = 'O bolo foi assado.';
          }, 
          10000
        )

        // else
        //     reject({ code: 404, msg: 'Erro not found' });
    });
}


// assarBolo().then((msg) => {
//     console.log("MSG da função assarBolo: " + msg);
// }).catch((error) => {
//     console.log('Mensagem de erro => ', error);
// });