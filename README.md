# Grupo Q

Este projeto foi criado com o objetivo de realizar o teste técnico proposto pelo Grupo Q. A aplicação desenvolvida consiste em uma loja online simples, com funcionalidades como listar produtos, exibir detalhes de um produto, adicionar produtos ao carrinho, remover produtos do carrinho e finalizar uma compra.

Para alcançar esse objetivo, utilizo conceitos modernos da linguagem JavaScript, como o uso de decorators para gerenciar o ciclo de vida dos componentes. Além disso, adotei uma filosofia que valoriza a simplicidade e a facilidade de uso. Acredito que um código limpo e organizado é fundamental para a manutenção e evolução de um projeto de software.

Em resumo, o projeto busca simplificar a forma como desenvolvemos aplicações web, valorizando a simplicidade, a eficiência e a colaboração entre desenvolvedores. Esperamos que essa abordagem possa contribuir para a criação de projetos mais acessíveis e sustentáveis.

## Estrutura do projeto

-  [.prelude](https://github.com/deMGoncalves/grupoQ/blob/master/.prelude/README.md)
    -  [artifact]()
    -  [directive]()
    -  [element]()
    -  [polyfill]()
    -  [standard]()
-  [component]()
-  [model]()
-  [site]()

## Screenshots

A seção de screenshots do projeto mostra algumas imagens da aplicação em diferentes momentos e telas, permitindo uma visão geral do visual e da usabilidade da plataforma. As screenshots mostram desde a tela inicial até páginas internas, bem como a exibição de produtos, o carrinho de compras e a finalização do pedido.

As imagens foram selecionadas para ilustrar as principais funcionalidades do projeto e sua interface limpa e intuitiva. Além disso, as screenshots podem servir como uma fonte de inspiração para outros desenvolvedores, mostrando como a implementação de boas práticas de design e desenvolvimento podem resultar em uma experiência de usuário agradável e eficiente.

![screenshots](https://user-images.githubusercontent.com/35740192/236906267-12a44954-f540-4479-8a63-943e6e0e1154.png)

## Manifesto

O manifesto é uma declaração de princípios que guiam o desenvolvimento do projeto:

1.  Simplicidade é a chave para a escalabilidade
2.  Pequeno é belo
3.  Imperfeito é humano

## Unidades construtivas

As unidades construtivas do projeto são:

1.  **View**: Responsável pela renderização do HTML, CSS e JavaScript da aplicação.
2.  **Root Aggregate**: Responsável pela modelagem do domínio da aplicação.
    -  **Action**: Responsável por manipular a entrada do usuário.
    -  **State**: Responsável por representar o estado da aplicação.
3.  **Advice**: Responsável por gerenciar aspectos transversais da aplicação, como logs, métricas e segurança.

## Características

-  Leve e de fácil utilização
-  Personalizável e adaptável para diversos projetos
-  Suporta as principais tecnologias do mercado

## Benefícios

O projeto traz diversos benefícios para a construção de aplicações web, como:

-  Código simples e fácil de manter
-  Escalabilidade e flexibilidade para acomodar mudanças no futuro
-  Modularidade e reutilização de código
-  Alta qualidade de código, seguindo os princípios do manifesto
-  Facilidade de teste e depuração

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

-  [Git](https://git-scm.com/)
-  [Node.js](https://nodejs.org/)
-  [Yarn](https://yarnpkg.com/)

## Variáveis de ambiente

O projeto utiliza algumas variáveis de ambiente para configurar o comportamento da aplicação. Elas podem ser definidas no sistema operacional ou em um arquivo .env na raiz do projeto.

Aqui estão as variáveis de ambiente utilizadas:

| Variável              | Descrição                                                              |
| --------------------- | ---------------------------------------------------------------------- |
| PUBLIC_PATH           | Define o caminho público para os arquivos da aplicação.                |
| HINTS                 | Define o nível de detalhe dos avisos exibidos durante a compilação.    |
| MAX_ASSET_SIZE        | Define o tamanho máximo (em bytes) permitido para um arquivo estático. |
| MAX_ENTRYPOINT_SIZE   | Define o tamanho máximo (em bytes) permitido para um ponto de entrada. |
| ANALYZER_MODE         | Define o modo de análise para o pacote webpack-bundle-analyzer.        |
| PORT                  | Define a porta em que o servidor da aplicação será executado.          |

Para definir essas variáveis, basta usar o comando export no terminal, seguido do nome da variável e seu valor:

```bash
export PUBLIC_PATH=/
export HINTS=warning
export MAX_ASSET_SIZE=2000000
export MAX_ENTRYPOINT_SIZE=2000000
export ANALYZER_MODE=
export PORT=5000
```

Alternativamente, você pode definir as variáveis em um arquivo .env na raiz do projeto, usando o formato NOME=VALOR. Lembre-se de adicionar o arquivo .env no seu .gitignore para que as informações confidenciais não sejam versionadas.

## Experimente

Para começar a usar, siga os seguintes passos:

1.  Clone o repositório em seu computador, usando o seguinte comando no terminal:
```bash
git clone https://github.com/deMGoncalves/grupoQ.git
```

2.  Acesse o diretório do projeto usando o seguinte comando:
```bash
cd grupoQ
```

3.  Instale as dependências do projeto usando o seguinte comando:
```bash
yarn install
```

4.  Inicie o servidor de desenvolvimento usando o seguinte comando:
```bash
yarn start
```

5.  Agora, você pode acessar a aplicação em seu navegador, acessando a URL [http://localhost:5000/](http://localhost:5000/).


## Licença

O projeto é de código aberto licenciado sob a licença MIT. Isso significa que você pode utilizá-lo livremente em seus projetos pessoais ou comerciais, desde que mantenha a atribuição do autor original.

## Contato

Caso você tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato com **deMGoncalves** através do email cleber.engineer@gmail.com.
