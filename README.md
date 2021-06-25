# Let Me Ask

Aplicação web desenvolvida durante o evento Next Level Week Together cujo objetivo é o cadastro de perguntas para criadores de conteúdo em lives e outros meios.

<p align="center">
  <img src="https://user-images.githubusercontent.com/26419930/123485636-dce02600-d5e0-11eb-93c6-6f36573ed1ad.png" alt="Telas do Let Me Ask"/>
</p>

## Tecnologias

As tecnologias utilizadas para a implementação foram:

- [React](https://reactjs.org)
- [Sass](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org)
- [Firebase](https://firebase.google.com/)

## Execução

Clone o projeto e acesse o diretório.

```bash
$ git clone https://github.com/abigailarruda/letmeask.git
$ cd letmeask/letmeask

$ yarn
```

Em seguida, crie um novo projeto utilizando o Firebase e coloque as variáveis de configuração do SDK em um documento <code>.env.local</code> na raiz da aplicação. O arquivo deve seguir a seguinte estrutura:

```bash
REACT_APP_API_KEY = ""
REACT_APP_AUTH_DOMAIN = ""
REACT_APP_DATABASE_URL = ""
REACT_APP_STORAGE_BUCKET = ""
REACT_APP_MESSAGING_SENDER_ID = ""
REACT_APP_APP_ID = ""
```

Por fim, execute o comando:

```bash
 $ yarn start
```
