# my-API

## Descrição

O **Twillio Whatsapp Gallery** é uma aplicação web que permite enviar e visualizar imagens de gatos através do WhatsApp utilizando a API do Twilio. A aplicação busca mensagens com imagens enviadas para um número específico do WhatsApp e exibe essas imagens em uma galeria interativa, permitindo a visualização em um lightbox.

## Funcionalidades

- Exibição de imagens enviadas via WhatsApp.
- Visualização em lightbox com navegação entre imagens.
- Carregamento dinâmico de dados da galeria.
- Código modular e estruturado.
- Funcionalidade opcional para apagar mensagens já enviadas.

## Estrutura do Projeto

```plaintext

my-api/
│
├── config/
│   └── .env              # Variáveis de ambiente do Twilio
│
├── node_modules/         # Dependências do projeto
│
├── public/
    ├── icons/            # Icones .svg utilizados
│   ├── index.html        # Página principal da aplicação
│   ├── script.js         # Lógica da aplicação
│   └── styles.css        # Estilos da aplicação
│
├── src/
│   ├── fetch-messages.js  # Módulo para buscar dados do Twilio
│   └── delete-messages.js # Módulo para apagar mensagens anteriormente enviadas
│
└── server.js # Servidor Express

```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js, utilizado para construir o servidor.
- **Twilio**: API para enviar e receber mensagens via WhatsApp.
- **dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **HTML5**: Estrutura da página web.
- **CSS3**: Estilização da aplicação.
- **JavaScript (ES6+)**: Linguagem de programação utilizada para a lógica da aplicação.

## Pre-requisitos

- Deve possuir uma conta no Twilio e iniciar uma conexão via sandbox para o whatsapp funcionar normalmente.
- Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Instalação

1. Clone o repositório: `git clone https://github.com/SEU_USUARIO/my-API.git`
2. No diretório do projeto, instale as dependências: `npm install`
3. Crie um arquivo .env na pasta config (crie-a na raiz do projeto) e adicione suas credenciais do Twilio: 

```plaintext 

TWILIO_ACCOUNT_SID=seu_account_sid
TWILIO_AUTH_TOKEN=seu_auth_token

```

## Como usar

1. Crie uma conta no Twilio e faça uma conexão sandbox para ter um número utilizável em que possa mandar as imagens.
2. Envie mensagens com imagens para o número configurado no WhatsApp.
3. Acesse a aplicação no seu navegador.
4. Veja as imagens carregadas na galeria e clique nelas para visualizar em um lightbox.

## Contribuições 

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.
