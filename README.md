# Consulta de Encomendas com Chatbot - Testes Cypress

![Image](https://github.com/user-attachments/assets/57e6c9ab-0eb2-4321-9f34-87891a1b2f7b)
_Bem-vindo ao repositório do projeto **Consulta de Encomendas com Chatbot**! Este projeto utiliza o **Cypress** para realizar testes end-to-end da funcionalidade de consulta de encomendas por meio de um chatbot integrado à aplicação **WebDojo**._

## Sobre o Projeto

Este repositório contém:

- A aplicação **WebDojo** (na pasta `Apps`), que inclui o chatbot de consulta de encomendas.
- Uma **suíte de testes automatizados com Cypress** (na pasta `Projetos`), que valida o comportamento do chatbot em diferentes cenários usando códigos de rastreio fictícios.

## Cenários Testados

- **Encomenda entregue** (`PD123456785BR`): Verifica se o chatbot informa que a encomenda foi entregue.
- **Encomenda despachada** (`BR987654321BR`): Confirma o status "a caminho" com prazo estimado.
- **Encomenda em rota** (`QW112233445BR`): Valida que a entrega está prevista para o mesmo dia.
- **Código inválido** (`AB123456789XY`): Testa a resposta do chatbot para códigos não encontrados.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **JavaScript**: Linguagem usada para os testes e a aplicação WebDojo.
- **Node.js**: Ambiente de execução para o Cypress e o WebDojo.

## Pré-requisitos

Para rodar o projeto localmente, você precisará de:

- **Node.js** (versão 16.x ou superior).
- **Git** instalado (com suporte ao Git Bash no Windows, recomendado).

## Configuração do Ambiente

O repositório já inclui a aplicação WebDojo e os testes Cypress, organizados em duas pastas: `Apps` e `Projetos`. Siga os passos abaixo para configurar:

### Passo 1 - Clonar o Repositório

Crie o diretório base e clone o repositório:

```bash
cd /c/
mkdir NinjaDoCypress
cd NinjaDoCypress
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Após o clone, você verá as pastas:

- `Apps/` (contém o WebDojo).
- `Projetos/` (contém os testes Cypress).

### Passo 2 - Instalar Dependências do WebDojo

Navegue até a pasta do WebDojo e instale as dependências:

```bash
cd Apps
npm install
```

### Passo 3 - Instalar Dependências do Cypress

Navegue até a pasta dos testes Cypress e instale as dependências:

```bash
cd ../Projetos
npm install
```

### Passo 4 - Iniciar a Aplicação

Volte para a pasta `Apps` e inicie o WebDojo:

```bash
cd ../Apps
npm run dev
```

Acesse **http://localhost:3000** no navegador para confirmar que a aplicação está rodando.

## Configuração do Cypress

O arquivo `cypress.config.js` (na pasta `Projetos`) está configurado com:

- **Base URL**: `http://localhost:3000` (onde o WebDojo roda).
- **Viewport padrão**: `1920x1080` (mas os testes usam "iphone-xr").
- **Tempo limite padrão**: `4000ms`.

Ajuste conforme necessário no arquivo `Projetos/cypress.config.js`.

## Executando os Testes

Certifique-se de que o WebDojo está rodando em `http://localhost:3000` (execute `npm run dev` na pasta `Apps`).

Navegue até a pasta dos testes:

```bash
cd Projetos
```

Abra o Cypress:

```bash
npx cypress open
```

Selecione **E2E Testing** e execute o arquivo `tracking.cy.js`.

Para rodar em modo **headless**:

```bash
npx cypress run
```

