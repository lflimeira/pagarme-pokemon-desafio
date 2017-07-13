# Documentação da API
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [PM2](http://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nodemon](https://nodemon.io/)
- [JavaScript Standard Style](https://standardjs.com/) 
- [Snazzy](https://www.npmjs.com/package/snazzy)

**Obs:** Outras dependências serão baixadas através do [package.json](package.json).

## Instalar

Para rodar a API, primeiramente é necessário instalar os requisitos, para isso basta seguir os passos a seguir:

- Primeiro baixe o Node.js através do link nos **Requisitos**, e instale-o.
- Após terminar a intalação do Node.js, na sua máquina utilizando o terminal e execute o comando `git clone https://github.com/lflimeira/pagarme-pokemon-desafio.git` no diretório em que deseja baixar esse projeto.
- Após terminar o download do projeto, acesse o diretório da API utilizando o terminal e execute o comando `npm install` para baixar as dependências do projeto.
- Execute o comando `npm install pm2 -g` para instalar o PM2.
- Execute o comando `npm install nodemon -g` para instalar o Nodemon.
- Execute o comando `npm install standard -g` para instalar o JavaScript Standard.
- Para finalizar instale o Snazzy executando o comando `npm install snazzy -g`

## Como funciona

Após terminar de instalar as dependências, o ambiente estará pronto para rodar a API, para isso, basta executar o comando `npm run start-dev` caso queira rodar a API como desenvolvedor, que é iniciada utilizando o Nodemon e a cada alteração no código ele roda a aplicação novamente, ou executar o comando `npm run start` caso queira rodar a API em produção com o PM2 (um gerenciador de processos para aplicações Node.js em modo cli (command line) bem como, um distribuidor automático de “cores”) e dessa forma caso um erro ocorra e a API pare, ele fica responsável por reiniciar a mesma.

## Endpoints

**Gerar Token**

`GET: http://localhost:3000/token` Responsável por gerar o token de segurança necessário para acessar os outros endpoints. O token terá validade de 1 dia.
______________________________________________________________________________________________________________________________________

**Consultar Pokemons**

`GET: http://localhost:3000/pokemons` Responsável por consultar todos os Pokemons.

Header: 
{ x-access-token: Token }

______________________________________________________________________________________________________________________________________

**Cadastrar Pokemon**

`POST: http://localhost:3000/pokemons` Responsável por cadastrar um novo Pokemon.

Header: 
{ x-access-token: Token }

Parâmetros:
{
  name: { permite_nulo: false },
  price: { permite_nulo: false },
  stock: { permite_nulo: true, valor_padrao: 1 }
}

______________________________________________________________________________________________________________________________________

**Alterar Pokemon**

`PUT: http://localhost:3000/pokemons/:id` Responsável por alterar um Pokemon existente.

Header: 
{ x-access-token: Token }

Parâmetros:
{
  name: { permite_nulo: false },
  price: { permite_nulo: false },
  stock: { permite_nulo: true, valor_padrao: 1 }
}

______________________________________________________________________________________________________________________________________

**Comprar Pokemon**

`PUT: http://localhost:3000/pokemons/buy/:id` Responsável por comprar Pokemon utilizando a Pagar.me.

Header: 
{ x-access-token: Token }

Parâmetros:
{
  quantity: { permite_nulo: false },
  card_number: { permite_nulo: false },
  card_exp_date: { permite_nulo: false }
  card_holder_name: { permite_nulo: false }
  card_cvv: { permite_nulo: false }
}

