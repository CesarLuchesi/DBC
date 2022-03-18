/*
    Seguindo com a implementação do nosso sistema de cadastro de colaboradores...

    Criem as classe-modelo de objeto

    class Colaborador {
        id; (setado automático pelo json-server)
        nome;
        dataNascimento;
        email;
        senha;
    }

    Necessitamos agora das seguintes funcionalidades:

    - Cadastrar um objeto colaborador (instanciar e salvar com o axios) com as informações dos inputs da tela de cadastro;
    	OBS: salvar o nome do cara no json-server no padrão Title-Case, ex: o cara digitou no input 'tiago silva schmidt' vou salvar no meu db.json => 'Tiago Silva Schmidt';
      - Ao cadastrar um colaborador com sucesso, limpar todos os inputs e "redirecionar" para a página de login;
      - Se houver algum erro colocar o erro no console.log (NÃO pode ser uma mensagem vermelha de erro, o erro tem que estar mapeado);


    - Funcionalidade de login:
    	- Busca todos colaboradores salvos no json-server;
    	- Busca aquele que tenha o email igual ao digitado;
    	- Verifica se a senha dele é igual a senha digitada no input senha;
    	- Se a validação estiver ok, vai para a tela 'home';
      
    	
    - Na tela home terá somente uma listagem dos colaboradores <li> pode ser só com o texto do nome de cada um;
*/
