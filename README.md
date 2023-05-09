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

# PWA

O aplicativo é um Progressive Web App, o que significa que ele pode ser acessado diretamente de um navegador da web e pode ser instalado como um aplicativo nativo em um dispositivo móvel. Ele oferece aos usuários uma experiência de usuário rápida e suave, mesmo em conexões de rede lentas, e possui recursos como notificações push, armazenamento em cache para acesso offline e a capacidade de ser adicionado à tela inicial do dispositivo para acesso rápido. Como um PWA, o aplicativo pode ser usado em uma variedade de plataformas, incluindo desktops, laptops, tablets e dispositivos móveis, tornando-o acessível para uma ampla gama de usuários. Além disso, como é acessado diretamente por meio de um navegador da web, não é necessário fazer o download e instalação de um aplicativo nativo separado, economizando espaço no armazenamento do dispositivo.

![image 10](https://user-images.githubusercontent.com/35740192/236915049-a6fad606-3c79-4bae-b5bd-ee20d6424777.png)

## Performance (Mobile vs Desktop)

A performance é um aspecto crucial para o sucesso de qualquer aplicação web. Neste projeto, foram adotadas diversas técnicas para garantir que a experiência do usuário seja a mais fluída possível, tanto na página inicial quanto na página de produtos.

Na página inicial, foram utilizadas técnicas como lazy loading de imagens, code splitting e minificação de arquivos. Além disso, o layout foi otimizado para garantir um carregamento rápido e eficiente em dispositivos móveis.

Já na página de produtos, além das técnicas utilizadas na página inicial, foram adotadas outras estratégias para garantir a melhor performance possível. Entre elas, destacam-se a otimização das imagens dos produtos, o uso de cache para reduzir o tempo de carregamento e a utilização de estratégias para carregamento assíncrono de conteúdo.

Todas essas técnicas foram aplicadas de forma cuidadosa e planejada, com o objetivo de garantir que a experiência do usuário seja a melhor possível, independentemente da conexão de internet ou do dispositivo utilizado. Como resultado, a aplicação oferece uma navegação rápida, fluída e sem interrupções, proporcionando uma experiência de compra agradável e eficiente para os usuários.

![performance](https://user-images.githubusercontent.com/35740192/236909509-f35b8fe9-c295-4d67-b27a-e30cd0ad08a4.png)

- [Home](https://pagespeed.web.dev/analysis/https-grupoq-pages-dev/yng79kuhw7?form_factor=desktop)
- [Product](https://pagespeed.web.dev/analysis/https-grupoq-pages-dev-6/dm79oocvpx?form_factor=desktop)

## Chuncks

A estratégia de divisão de arquivos adotada neste projeto visa melhorar o desempenho e a velocidade de carregamento das páginas. O tamanho total dos arquivos é de 16,62 KB, o que é considerado relativamente pequeno.

O arquivo principal, "app.0f58a7188d07b3589f5b.js", contém a maior parte do código da aplicação, com 13,27 KB. Ele é responsável por carregar a página inicial e todos os componentes necessários para o funcionamento correto da página.

Já os outros arquivos, "bag.939597f405c6b8d8b029.js" e "checkout.c69cc6718fe50428e908.js", contêm código específico para as páginas do carrinho de compras e finalização da compra, respectivamente. Eles são carregados apenas quando o usuário acessa essas páginas, reduzindo o tempo de carregamento da página inicial.

Além disso, há o arquivo "sw.fdc696cb211a36501d97.js", que contém o código para o Service Worker da aplicação. Ele é carregado separadamente para garantir que a funcionalidade do Service Worker esteja sempre disponível, mesmo em casos de lentidão na conexão de internet.

Essa estratégia de divisão de arquivos permite que a aplicação carregue mais rapidamente e melhore a experiência do usuário, tornando a navegação mais ágil e satisfatória.

![chuncks](https://user-images.githubusercontent.com/35740192/236910629-292a5fa9-1e4e-48f5-b46b-ecb74583706b.png)

- [Report](https://grupoq.pages.dev/report)

## Google Search Tools

É importante destacar que as páginas deste projeto são indexáveis pelo Google Search, o que significa que elas podem ser encontradas facilmente pelos usuários que realizam pesquisas na web. Isso ocorre porque o projeto utiliza práticas de SEO (Search Engine Optimization) para otimizar o conteúdo e a estrutura das páginas, tornando-as mais amigáveis para os mecanismos de busca.

Além disso, as páginas também estão de acordo com as diretrizes do Google para indexação, como a utilização de sitemaps, tags meta, entre outros. Isso permite que as páginas sejam mais facilmente identificadas e classificadas pelos mecanismos de busca, aumentando sua visibilidade para os usuários.

Com isso, o projeto busca garantir que as páginas sejam facilmente encontradas pelos usuários que buscam informações relacionadas aos seus conteúdos, aumentando assim o tráfego orgânico e a visibilidade do projeto na web.

![image](https://user-images.githubusercontent.com/35740192/236912691-42857d84-b63c-4b4b-858c-21c905e9aa4d.png)

## Manifesto

O manifesto é uma declaração de princípios que guiam o desenvolvimento do projeto:

1.  Simplicidade é a chave para a escalabilidade
2.  Pequeno é belo
3.  Imperfeito é humano

## Unidades construtivas

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--GCWxyQj---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hwjg0cylkg2n1a85bg82.png)

As unidades construtivas do projeto são:

1.  **View**: Responsável pela renderização do HTML, CSS e JavaScript da aplicação.
2.  **Root Aggregate**: Responsável pela modelagem do domínio da aplicação.
    -  **Action**: Responsável por manipular a entrada do usuário.
    -  **State**: Responsável por representar o estado da aplicação.
3.  **Advice**: Responsável por gerenciar aspectos transversais da aplicação, como logs, métricas e segurança.

- [Uma nova visão sobre modularidade e componentes javascript](https://dev.to/demgoncalves/components-469o)

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

## Deploy

O processo de deploy do projeto foi realizado utilizando o Cloudflare Pages, uma plataforma de hospedagem e deploy de aplicações web que oferece uma rede global de distribuição de conteúdo (CDN) para acelerar o carregamento das páginas.

O deploy é realizado automaticamente após cada push no repositório do GitHub, o que significa que qualquer atualização no código é imediatamente refletida na versão online da aplicação. O processo de deploy é iniciado com a inicialização do ambiente de build, seguido pela clonagem do repositório git e construção da aplicação.

Após a construção da aplicação, o Cloudflare Pages realiza o deploy para sua rede global de servidores, garantindo que a aplicação seja carregada o mais rápido possível em qualquer parte do mundo. Todo o processo leva apenas alguns segundos, garantindo que as atualizações do projeto sejam entregues aos usuários finais com rapidez e eficiência.

![image](https://user-images.githubusercontent.com/35740192/236913661-13b5b08a-2f04-44cd-a170-3cafdf2b8878.png)


## Licença

O projeto é de código aberto licenciado sob a licença MIT. Isso significa que você pode utilizá-lo livremente em seus projetos pessoais ou comerciais, desde que mantenha a atribuição do autor original.

## Contato

Caso você tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato com **deMGoncalves** através do email cleber.engineer@gmail.com.
