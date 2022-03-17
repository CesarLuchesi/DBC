/* 
          EMAIL

        adicionar um eventListener para o evento "onkeyup" do input enter-Email que terá como ação esta função de emailValidate
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
        6 - deve possuir o domínio 'dbccompany'
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="email-Error" para fique com um display visível ou invisível (dependendo da situação)
    */

/* 

     SENHA

      adicionar um eventListener para o evento "onkeyup" do input senha-input que terá como ação esta função de validatePassword
      deve validar as seguintes regras:
      1 - obrigatório ter ao menos uma letra minúscula;
      2 - obrigatório ter ao menos uma letra maiúscula;
      3 - obrigatório ter ao menos um número;
      4 - obrigatório ter ao menos um carácter especial;
      5 - obrigatório ter ao menos 8 caractéres;
      6 - a senha não pode conter espaços em branco;
      obs: caso a senha (value) que está no input for válido/inválido deverá alterar a span com id="senha-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

/* 
        DATA

        adicionar um eventListener para o evento "onkeyup" do input data-input que terá como ação esta função de validatePassword
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
        3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="data-error" para fique com um display visível ou invisível (dependendo da situação)
    */

/*


  HOME WORK
  
  Temos o seguinte sistema atualmente (imaginando que temos completo tudo o que foi proposto em aula):

  - um campo data de nascimento (validado e com o texto de data inválida caso assim esteja);
  - um campo email (validado e com o texto de email inválido caso assim esteja);
  - um campo senha (validado e com o texto de senha inválida caso assim esteja);
  - um botão cadastrar que "sabe" se o cadastro está válido ou não;

  
  Agora precisamos:
  (o modelo do html está no arquivo index.html e o modelo visual está em um arquivo page-model.png);

  - adicionar um campo de nome acima da data de nascimento e adicionar a validação para possuir somente letras;
  - criar uma classe Colaborador contendo todas as propriedades que os campos possuem e uma propriedade id;
  - ao clicar em cadastrar, instanciar um colaborador e adicioná-lo à ul e à uma lista de colaboradores;
  - adicionar um botão 'Visualizar Colaboradores' (pode ser no topo da tela à direita) 
    que imprime no console todos os colaboradores cadastrados 
    (ATENÇÃO -> buscar os colaboradores pelo document e não fazer um simples forEach da lista de colaboradores)
*/
