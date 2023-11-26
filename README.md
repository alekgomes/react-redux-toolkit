# React Api Simulation


### Descrição

Esse projeto tem como objetivo simular a interação de um usuário com uma api fake. O projeto apresenta duas páginas: Home e Details. Na página Home o usuário pode digitar seu nome, seu gênero e tipos de filmes favoritos e, ao clicar no botão de enviar, uma requisição POST para `/users` é feita através de um dispatch do redux-thunk. Essa requisição é interceptada pelo MSW (que utiliza um service worker registrado com esse propósito) e interage com o arquivo em `src/mocks/data`, que funciona como um banco de dados efêmero para a aplicação.

Ao acessas a página de Detalhes, o código envia uma requisição GET para `/users`, que também é interceptada pelo MSW e retorna o conteúdo do mesmo arquivo.

Nessa arquitetura, os componentes React atuam como se existisse uma API verdadeira, pois uma requisição HTTP é enviada e uma response HTTP é recebida.

---

### Tecnologias
[React](https://react.dev/) | Biblioteca principal para construção da UI.

[React-Router](https://reactrouter.com/en/main) | Biblioteca para gerenciamento das duas rotas disponíveis no projeto.

[MSW](https://mswjs.io/) | Principal serviço dessa aplicação. Responsável por simular a interação com API.

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Biblioteca de testes para componentes React.

[Vitest](https://vitest.dev/) | Biblioteca de asserções durante os testes.

[Vite](https://vitejs.dev/)  | Bundler do projeto.

[Redux-toolkit/redux-thunk](https://redux-toolkit.js.org/) | Gerenciamento de estado do projeto. Thunks foram usados para mimetizar o comportamento assíncrono de requisições.

[Material-UI](https://mui.com/material-ui/) | Biblioteca de componentes visuais.

[React Hook Form](https://react-hook-form.com/) | Validação de inputs



