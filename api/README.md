# Catálogo de BluRays/DVD's - API

> API para criação, alteração, busca e exclusão de registros de títulos do banco de dados.

A aplicaçao foi desenvolvida utilizando o framework [Ruby On Rails](https://rubyonrails.org/) e utiliza banco de dados [SQLite](https://www.sqlite.org/index.html) para armazenamento.

## Pré-requisitos

- Ter [Ruby On Rails](https://gorails.com/setup/ubuntu/20.04#ruby-rbenv) instalado.
### Versões utilizadas nesta API:
- Ruby 2.7.1
- Rails 6.1.3
- Bundler 2.2.14

## Instalação

```bash
git clone https://github.com/felipesvianna/bluray-dvd-app

cd api && bundle install
```
## Banco de Dados

Esta API utiliza banco de dados [SQLite](https://www.sqlite.org/index.html) para armazenamento local.

## Utilização

```bash
# comando opicional para gerar entradas na base de dados automaticamente
rails db:seed

# comando para iniciar o servidor da api
rails s
```

Endereço padrão para acessar a API: http://localhost:3000

### Endpoins

- GET /api/v1/filmes

Retorna todos os títulos da base de dados

- GET /api/v1/filmes/search/:param 

Retorna os títulos que contenham os caracteres de :param

- POST /api/v1/filmes/

Insere um título na base de dados e retorna o título inserido
- PATCH /api/v1/filmes/:id

Edita um título na base de dados e retorna o título editado

- DELETE /api/v1/filmes/:id

Exclui um título na base de dados e retorna o título excluido

## Testes

Foram implementados testes unitários e de integração.

```
# Comando para executar os testes
rspec
```

## Gems utilizadas

- rspec-rails
- shoulda-matchers
- factory_bot_rails
- faker

## Autor

- **Felipe Vianna** - [Github](https://github.com/felipesvianna)
