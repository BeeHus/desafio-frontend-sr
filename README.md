# Avaliação - Desenvolvedor Frontend SR

De modo a avaliar a capacidade técnica do candidato, esta avaliação compreende o desenvolvimento de uma aplicação com as características listadas abaixo. A aplicação fará o consumo a partir de servidores _mock_ (`json-server-auth`), e o arquivo que cria a "base de dados" é o db.json deste repositório. Há também uma documentação parcial dos endpoints disponíveis na pasta _api_queries_insomnia_, que pode ser importada para o Insomnia.

Ao desenvolver a aplicação, alguns detalhes serão necessários:

- A aplicação deve ser criada em React + TS;
- **Todos** os componentes devem ser criados e estar disponibilizados em isolamento (Storybook);
- Cobertura de testes será avaliada;
- A aplicação deve estar preparada para i18n;
- As aplicações para parceiros e clientes devem estar preparadas para _white-label_;
- Todas as consultas ao backend devem estar devidamente "cacheadas".

O ponto mais importante a ser julgado será sua capacidade de arquitetar uma aplicação escalável, tanto do ponto de vista de desempenho quanto do ponto de vista da experiência de desenvolvimento (DX). Boa arquitetura e padrões de desenvolvimento de componentes, hooks e funções auxiliares, bem como boa arquitetura e padrões de estilização da aplicação são fortes indicativos de uma aplicação com boa escalabilidade da DX.

## Detalhamento da aplicação

O backend pode ser iniciado a partir deste repositório com o comando `npx json-server-auth --watch db.json --port 8080 --routes routes.json`, após instalar as dependências (`npm install`);

De início temos 3 usuários já cadastrados:

- jdoe@fictitiouswm.com / 12345teste
- dbevilaqua@beehus.com.br / teste12345
- richierichardson@outlook.com / 123teste456

Todas as operações na API mock acima (com exceção do login) são permitidas apenas a usuários logados. Por limitações técnicas não limitamos consultas por tipo de usuário, a API checa apenas se há um _bearer token_.

---

1. Tela para autenticação, com login e senha. Uma vez logado deve redirecionar para uma de três possíveis aplicações: uma para usuários internos da empresa (usuário tipo "beehus"), uma para usuários internos de empresas parceiras (usuário tipo "partner"), e uma para clientes externos de empresas parceiras (usuário tipo "client");
2. Caso seja feito login como usuário interno, deverá ser possível:
   1. Visualizar a listagem de empresas parceiras já cadastradas;
   2. Detalhar uma empresa parceira. A partir do detalhamento, deve ser possível:
      1. Editar dados da empresa parceira;
      2. Excluir a empresa parceira;
      3. Cadastrar usuários internos da empresa parceira;
      4. Visualizar a listagem de usuários internos da empresa parceira, e a partir dela:
         1. Detalhar um usuário interno;
         2. Editar um usuário interno;
         3. Remover um usuário interno;
   3. Cadastrar novas empresas parceiras;
   4. Remover uma empresa parceira;
   5. Editar dados de uma empresa parceira;
3. Caso seja feito login como usuário interno de empresa parceira, deverá ser possível:
   1. Visualizar a listagem de clientes externos da empresa;
   2. Detalhar um cliente externo da empresa. A partir do detalhamento, deve ser possível:
      1. Editar dados de um cliente externo;
      2. Excluir um cliente externo;
      3. Cadastrar um arquivo de posição da carteira de um cliente externo;
         1. Foi disponibilizado, no arquivo _script.js_, uma função que gera uma posição fictícia para uma determinada data, cliente e empresa;
   3. Cadastrar novos clientes externos;
   4. Remover um cliente externo;
   5. Editar dados de um cliente externo;
4. Caso seja feito login como cliente externo de uma empresa parceira, deverá ser possível:
   1. Visualizar a última posição da carteira, com uma listagem dos ativos cadastrados e um gráfico com o resumo dos ativos por classe;
      1. O gráfico deve ser um gráfico de rosca, com legenda mostrando o total, em R$, dos investimentos por classe, e a rosca mostrando o percentual de cada classe perante o total;
      2. A listagem de ativos deve ser uma tabela com colunas para nome do ativo, classe, categoria e valor financeiro (devidamente formatado para Reais Brasileiros). A tabela deve estar ordenada, inicialmente, pela coluna "Classe", depois pela coluna "Categoria" e por último pela coluna "Nome do ativo", sempre em ordem alfabética.
