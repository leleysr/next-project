This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next Project

## Descrição

Esse é um projeto desenvolvido para demonstrar os conhecimentos com o framework NextJs.
Nesse projeto, existe um menu para navegação entre as páginas criadas, sendo elas: Home, Contact, About, Login, My Account e Users. O link de Login só é exibido no caso do usuário ainda não ter efetuado o login. Caso o mesmo tenha sido efetuado, o link é substituido pelo link de My account, onde as informações do usuário logado são exibidas.

### Instalação

Para iniciar, clone o repositório: `https://github.com/leleysr/next-project.git`

#### Instalando dependências

Para instalar as dependencias do projeto, execute um dos seguintes comandos:

```bash
npm i
# or
npm install
# or
yarn install
```

Após instalar as dependências, para rodar o projeto localmente, execute:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Após isso, abra no navegador a url: [http://localhost:3000](http://localhost:3000), e assim você terá acesso ao projeto desenvolvido.

## Funcionalidades

- Menu: Foi desenvolvido um menu global, exibido em todas as páginas, contendo links que redirecionam o usuário para o conteúdo correspondente selecionado. Um ponto importante é que o link de login só é exibido se o usuário ainda não ter efetuado o login. Caso contrário, o link é substituido pelo link de my account, onde as informações do usuário logado são exibidas. Ao tentar acessar a página de my account substituindo a url sem ter sido feito login previamente, o usuário é redirecionado para a página de login.

- Login: Na página de login, é possivel que o login de um usuário seja efetuado através de um formulário. Nos campos para login, são solicitados o e-mail e a senha. No input de e-mail, é realizada uma validação onde apenas entradas no formato de e-mail são aceitas. No campo de senha, é solicitada uma quantidade mínima de 8 caracteres. Caso alguma regra falhe em algum dos inputs, um texto indicativo é exibido.

- Listagem de usuários: Na página users, é consumida uma api, de onde são obtidos dados de diversos usuários, os quais são listados em grupos de 5 usuários, os quais podem ser alterados através da paginação da lista.

- Logout do usuário: Após ter efetuado o login, o usuário pode realizar o logout na página my account, onde existe uma opção para se desconectar.

## Contato

Qualquer dúvida, não hesite em entrar em contato via e-mail: wanderleysr00@gmail.com
