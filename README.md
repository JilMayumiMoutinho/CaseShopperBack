<h2 align="center">🛒🖱Projeto Teste Shopper🖥️🛒 </h2>

<h4 align="justify">
Elaboração de site (backend) com cadastro de usuário para poder realizar os pedidos. 
O sistema foi escrito TypeScript (node.js e/ou react.js).
Foi recebido uma lista com produtos disponíveis em formato csv com seus respectivos preços e estoque, porém sem fotos. Este arquivo foi convertido em JSON para inclusão no banco de dados. 

<h4/>

<h3 align="center"> Sumário </h3>

<h3 align="center">

[🔗Documentação da API](#🔗link-Documentação-Postman) | [💻Projeto](#💻como-rodar-o-projeto-localmente) | [🛠️Tecnologias](#tecnologias-utilizadas) | [👩🏻‍💻Desenvolvedora](#👩🏻‍💻desenvolvedora)

</h3>

## ✔O que funciona

  - Recebe a lista de produtos, sua quantidade disponível em estoque e preço unitário vindos da API de backend.
  - O usuário deve realizar seu cadastro antes de realizar suas compras.
  - Os produtos podem ser adicionados no carrinho do cliente.
  - Usuário pode alterar a quantidade ou excluir algum item do carrinho.
  - O usúario recebe um alert caso tente adicionar mais itens do que há disponível em estoque (Erro na requisição de adiconar ao carrinho).
  - Requisição de calculo do valor total das compras.

## 🔗Link Documentação - Postman

- http://pokebattle-pokedex.surge.sh

## 💻Como Rodar o Projeto Localmente

Siga o passo-a-passo abaixo:

| Atividades                | Comando              |
| ------------------------- | ---------------------|
| Faça o clone              | `git clone`          |
| Entre na pasta            | `cd nome pasta`      |
| Instale as dependências   | `npm install`        |
| Crie um arquivo .env      | `*`                  |
| Crie as tabelas populadas | `npm run migrations` |

*
DB_HOST = (edite aqui e coloque o endereço host do banco de dados)
DB_USER = (edite aqui e coloque o nome de usuário do banco de dados)
DB_PASSWORD = (edite aqui e coloque a senha do banco de dados)
DB_DATABASE = (edite aqui e coloque o nome do banco de dados)

Por padrão a aplicação rodará localmente na porta 3000.

## 🛠Tecnologias Bibliotecas e aplicações Utilizadas

 <div style="display: inline_block"><br>
  <img align="center" alt="NodeJS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Knex" height="30" width="40" src="https://cdn.worldvectorlogo.com/logos/knex-1.svg">
  <img align="center" alt="Git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"> 
  <img align="center" alt="MySQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg">
  <img align="center" alt="Postman" height="30" width="40" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg">
  <img align="center" alt="Heroku" height="30" width="40" src="https://www.svgrepo.com/show/353869/heroku-icon.svg">
</div>
|  Express  |   Cors   |

<h2 align="center">

## 👩🏻‍💻Desenvolvedora

</h2>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/JilMayumiMoutinho"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104766367?v=4" width="100px;" alt=""/><br /><sub><b>Jil Mayumi Moutinho</b></sub></a>
  </td> 
  </tr>
</table>

