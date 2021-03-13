# Catálogo de BluRays/DVD's - FrontEnd

> Frontend da aplicação Catálogo de BluRays/DVD's.

A aplicaçao usa Context/Redux para gerenciamento de estado, [DotEnv](https://www.npmjs.com/package/dotenv) para gerenciar variáveis de ambiente, framework [Tailwind CSS](https://tailwindcss.com/) para CSS e utiliza uma API para buscar os dados.

## Pré-requisitos

- Ter acesso à API.
- Se necessário, configurar no arquivo .env o endereço e versão da API. O endereço padrão configurado é http://localhost:3000/.

## Instalação

```
git clone https://github.com/felipesvianna/bluray-dvd-app

cd frontend && npm install
```

## Utilização

_\*A porta padrão foi alterada para 3001 ao invés de 3000 no package.json._

```
npm start
```
## Testes

Foram implementados testes unitários e de integração.

```
# Comando para executar os testes
npm test
```

## Pacotes NodeJS utilizados no FrontEnd

- axios
- dotenv
- react
- react-dom
- react-router-dom
- react-tooltip
- jest 
- babel-jest
- enzyme
- @wojtekmaj/enzyme-adapter-react-17
- tailwind e [suas dependencias](https://tailwindcss.com/docs/guides/create-react-app)

## Autor

- Design e Desenvolvimento: **Felipe Vianna** - [Github](https://github.com/felipesvianna)
