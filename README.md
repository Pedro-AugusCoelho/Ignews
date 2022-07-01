# Sobre o projeto 💬

O **IgNews** é uma aplicação web desenvolvida na Rocketseat

## Funcionalidades 🧠

###  📕 A aplicação contém as seguintes funcionalidades:

- [x] Logar na aplicação utilizando o github
- [x] Realizar uma assinatura mensal no site para ler as publicações postadas

## Pré-requisitos ⚙

#### Antes de começar, é bom ter instalado em sua maquina as seguintes ferramentas:
- [x] [GIT](https://git-scm.com/)
- [x] [VSCode](https://code.visualstudio.com/)
- [x] [NodeJs](https://nodejs.org/en/)

## Responsividade 🖥

<div align='left'>
  <img height='400px' alt='Readme' title='Readme' src='./asset/Video.gif'>
</div>

### Rodando o Projeto 📖

```bash
# Clone para este repositório
$ git clone <https://github.com/Pedro-AugusCoelho/Ignews.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd IgNews

# Instale as dependências
$ npm install / yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev / yarn dev
# A aplicação iniciará na porta:3000 - acesse <http://localhost:3000>

# Criar um arquivo .env.local para armanezar os acessos
# São necessárias as seguintes variáveis de ambiente:

# Referente ao Github
$ GITHUB_ID - GITHUB_SECRET

# Referente ao Stripe
$ STRIPE_CANCEL_URL - STRIPE_WEBHOOKS_SECRET - STRIPE_API_KEY - NEXT_PUBLIC_STRIPE_PUBLIC_KEY - STRIPE_SUCCESS_URL

# Referente ao FaunaDB
$ FAUNADB_KEY - PRISMIC_ACCESS_TOKEN - PRISMIC_ENDPOINT
 
```

## Tecnologias 🛠

Desenvolvido utilizando as seguintes tecnologias:

- [NEXTJS](https://nextjs.org/)
- [TYPESCRIPT](https://www.typescriptlang.org/)
- [REACT-ICONS](https://react-icons.github.io/react-icons/)
- [PRISMIC](https://prismic.io/)
- [STRIPE](https://stripe.com/br)
- [AXIOS](https://axios-http.com/docs/intro)
- [FAUNADB](https://fauna.com/)
- [SASS](https://sass-lang.com/)


## Desenvolvido 💡

- [Rocketseat](https://www.rocketseat.com.br/)

****************

<p align="center">Feito por: Pedro Augusto & Rocketseat</p>
