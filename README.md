# API-procedures-DATASUS

Uma API em NestJS para acesso e gerenciamento da base de dados de terminologia e procedimentos do Sistema Único de Saúde (SUS) brasileiro. Esta API fornece acesso a mais de 63 tabelas do SUS com suporte completo a migrações e carregamento inicial de dados.

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Executando Migrações](#executando-migrações)
- [Documentação da API](#documentação-da-api)
- [Implantação com Docker](#implantação-com-docker)
- [Extração de Dados](#extração-de-dados)
- [Diagramas e Modelagem](#diagramas-e-modelagem)

## 🔍 Visão Geral

Este repositório foi criado para estudo e organização da terminologia do SUS (Sistema Único de Saúde) brasileiro.
Ele expõe toda a estrutura de tabelas e relações do **Repositório de Terminologia em Saúde (RTS)**, publicamente disponível no portal do Ministério da Saúde (rts.saude.gov.br).

## 🌟 Funcionalidades

- Acesso a mais de 63 tabelas de terminologia do SUS
- Sistema completo de migrações para configuração do banco de dados
- API RESTful para consulta e gerenciamento de procedimentos de saúde
- Capacidade de seed de dados
- Documentação da API com Swagger
- Opção de implantação em contêineres com Docker

## 💻 Tecnologias

- **Backend**: NestJS, TypeScript
- **Banco de Dados**: MySQL (via TypeORM)
- **Documentação**: Swagger/OpenAPI
- **Validação**: class-validator, class-transformer
- **Conteinerização**: Docker, Docker Compose
- **Extração de Dados**: Scripts Python

## 📁 Estrutura do Projeto

```
/
├── database/               # Migrações e esquemas de banco de dados
│   ├── migration/          # Arquivos de migração TypeORM
│   └── datasus.sql         # Arquivo de esquema SQL
├── seeders/                # Scripts de seed de dados
│   └── arquivos_de_insercao/ # Arquivos SQL para inserção
├── src/
│   ├── main.ts             # Ponto de entrada da aplicação
│   ├── app.module.ts       # Módulo principal da aplicação
│   ├── procedures/         # Módulo de procedimentos
│   │   ├── controllers/    # Controladores da API
│   │   ├── dtos/           # Objetos de Transferência de Dados
│   │   ├── exceptions/     # Exceções personalizadas
│   │   └── service/        # Lógica de negócios
│   ├── products/           # Módulo de produtos
│   ├── repository/         # Implementação do padrão Repository
│   │   └── typeorm/        # Entidades TypeORM
│   └── utils/              # Funções utilitárias
├── interfaces/             # Interfaces TypeScript
├── test/                   # Testes end-to-end
├── docker-compose.yaml     # Configuração do Docker Compose
└── Dockerfile              # Configuração do Docker
```

## ⚙️ Pré-requisitos

- Node.js v16+
- npm ou yarn
- Banco de dados MySQL (ou compatível)
- Python 3.7+ (para scripts de extração de dados)
- Docker & Docker Compose (para implantação em contêineres)

## 🛠️ Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/API-procedures-DATASUS.git
   cd API-procedures-DATASUS
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure o ambiente
   Crie um arquivo `.env` no diretório raiz com as seguintes variáveis:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=user
   DB_PASSWORD=123456
   DB_DATABASE=test
   ```

## 💾 Configuração do Banco de Dados

### Opção 1: Usando Docker

A maneira mais fácil de configurar o banco de dados é usar o arquivo Docker Compose fornecido:

```bash
docker-compose up -d
```

Isso criará um contêiner MySQL 8.0 com todas as configurações necessárias.

### Opção 2: Configuração Manual

1. Crie um banco de dados MySQL chamado `test`
2. Crie um usuário com as permissões apropriadas
3. Atualize a configuração do banco de dados em `src/app.module.ts` ou no arquivo `.env`

## 🔄 Executando Migrações

Execute os seguintes comandos para executar migrações do banco de dados:

```bash
# Gere migrações (se necessário)
npm run migration:generate -- database/migration/NomeDaMigracao

# Execute migrações
npm run migration:run

# Reverta migrações
npm run migration:revert
```

## 📚 Documentação da API

A documentação da API está disponível via Swagger UI em `/docs` quando a aplicação está em execução.

### Principais Endpoints

#### Procedimentos

- `GET /v1/procedures` - Listar todos os procedimentos
- `GET /v1/procedures/company/:id` - Obter procedimentos por ID da empresa
- `POST /v1/procedures` - Criar um novo procedimento
- `PUT /v1/procedures/:id` - Atualizar um procedimento
- `DELETE /v1/procedures/:id` - Excluir um procedimento


## 🐳 Implantação com Docker

### Construção e Execução com Docker

1. Construa a imagem Docker:
   ```bash
   docker build -t api-procedures-datasus .
   ```

2. Execute a aplicação com Docker Compose:
   ```bash
   docker-compose up -d
   ```

A API estará disponível em `http://localhost:3000/v1`.

## 📊 Extração de Dados

O repositório inclui scripts Python para extração de dados do portal do SUS. Esses scripts estão localizados no diretório seeders.

Requisitos para scripts de extração:
- Python 3.7+
- Pacotes necessários listados nos scripts de extração

## 📈 Diagramas e Modelagem

Diagrama de banco de dados disponível em: [https://dbdiagram.io/d/64beddb602bd1c4a5e9e35c0](https://dbdiagram.io/d/64beddb602bd1c4a5e9e35c0)


## 📋 TODO

- [ ] Grupo de medicamentos
- [ ] CBOs (Classificação Brasileira de Ocupações)
- [ ] Mais procedimentos
- [ ] Terminologia médica adicional
- [ ] TB_TIPO_MARCACAO
- [ ] TB_CIAP2
- [ ] TB_REACAO_ADVERSA
- [ ] TB_CBHPM