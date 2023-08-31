
# Liven Store
Aplicação desenvolvida em React Native (CLI), com o objetivo de simular a interação do usuário com um ecommerce, visualizando, adicionando e removendo produtos no carrinho.

## Preview
https://github.com/devbran-git/livenstore/assets/72209584/017fb587-25e1-4b38-9e40-f425cd573c0d

## Recursos
### Dados
Os dados utilizados neste app são da base de dados da [Fake Store API](https://fakestoreapi.com/).
### Services
Os services do app foram baseados na bibloteca [axios](https://www.npmjs.com/package/axios).
### Gerenciamento de estado global
Para gerenciar o estado global da aplicação, foi utilizada a Context API do React.
### Estilização
A estilização do app foi feita com Stylesheet, react-native-svg e fontes da Google Fonts.
### Versionamento de código
Foram utilizados Git e Github para gerenciamento de versão de código local e remoto, respectivamente. O fluxo e o pattern utilizados foram o git flow com commits semânticos.


## Processo
O processo de construção consistiu em planejamento, design e desenvolvimento. Após analisar os critérios do desafio, foi criado um rascunho no [Figma](https://www.figma.com/file/arM2ha1BSLspSWNRuF6ENN/Liven-Store?type=design&node-id=0%3A1&mode=design&t=0Vdcl4VWug38P1bA-1), que serviu como base para o desenvolviemnto das features do app.


## Ações do usuário
- Acessar tela de produtos;
- Ver detalhes do produto;
- Adicionar ou reemover;
- Aumentar ou diminuir a quantidade;
- Acessar à tela de carrinho, com um resumo dos produtos adicionados e o valor total da compra;
- Finalizar compra, excluir um ou todos os produtos, ou retornar à loja e continar adicionando produtos.


## Para testar
É necesário ter instalado Andoroid Studio ou Xcode no computador. As informações para configurar ambiente se encontram no [ink]([url](https://reactnative.dev/docs/environment-setup)https://reactnative.dev/docs/environment-setup).

Passos:
- clonar este repositório para pasta local;
- abrir o projeto em um editor de código e rodar, na pasta raiz do projeto, o comando `yarn` ou `npm install`, para baixar as bibliotecas necessárias ao funcionamento do app;
- se o ambiente for macOS, rodar o comando `npx pod-instal ios` também na pasta raiz do projeto;
- rodar o comando `yarn android` ou `yarn ios`, para rodar o app em emulador android ou ios, respectivamente.


## Especificações
- node na versão: ">=16";
- React Native na versão: "0.72.4";
- versão do React: "18.2.0".

