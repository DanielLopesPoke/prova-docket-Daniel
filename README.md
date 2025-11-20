# Prova Fullstack - Sistema de Marcas

Projeto fullstack com Docker contendo API NestJS, Frontend React e PostgreSQL.

## Sumário

- [Requisitos](#requisitos)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Derrubar os Recursos](#como-derrubar-os-recursos)

## Requisitos

- Docker
- Docker Compose
- Git

## Como Executar

### Passo 1: Clone o repositório
```bash
git clone https://github.com/DanielLopesPoke/prova-docket-daniel.git
cd prova-docket-daniel
```

### Passo 2: Execute o projeto
```bash
docker compose up --build
```

### Passo 3: Acesse os serviços
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001
- **Swagger**: http://localhost:3001/api
- **PostgreSQL**: localhost:5432

### Passo 4: Testar só o banco (opcional)
```bash
# Subir só o PostgreSQL
docker compose up postgres -d

# Conectar no banco
docker exec -it brands_postgres psql -U postgres -d brands_db
```

## Endpoints da API

### Base URL: `http://localhost:3001`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/brands` | Lista todas as marcas |
| GET | `/brands/:id` | Busca uma marca por ID |
| POST | `/brands` | Cria uma nova marca |
| PUT | `/brands/:id` | Atualiza uma marca |
| DELETE | `/brands/:id` | Remove uma marca |

### Modelo de Dados - Brand
```json
{
  "id": 1,
  "name": "Nike",
  "expertise": "Calçados esportivos",
  "year_founded": 1964,
  "active": true
}
```

### Exemplos de Resposta

**GET /brands**
```json
[
  {
    "id": 1,
    "name": "Nike",
    "expertise": "Calçados esportivos",
    "year_founded": 1964,
    "active": true
  },
  {
    "id": 2,
    "name": "Adidas",
    "expertise": "Artigos esportivos",
    "year_founded": 1949,
    "active": true
  }
]
```

**POST /brands**
```json
// Request Body
{
  "name": "Puma",
  "expertise": "Roupas esportivas",
  "year_founded": 1948,
  "active": true
}

// Response
{
  "id": 3,
  "name": "Puma",
  "expertise": "Roupas esportivas",
  "year_founded": 1948,
  "active": true
}
```

## Estrutura do Projeto

```
Daniel Lopes Junior - Prova - Docket/
├── api/                 # Backend NestJS
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── front/               # Frontend React
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── deploy/              # Configurações Docker
│   └── docker-compose.yml
├── .gitignore
├── .dockerignore
└── README.md
```

## Redes Docker

- **db-network**: Comunicação PostgreSQL ↔ API
- **app-network**: Comunicação API ↔ Frontend

## Volumes

- **postgres_data**: Persiste dados do PostgreSQL

##  Como Derrubar os Recursos

### Para parar os containers:
```bash
docker compose down
```

### Para parar e remover volumes (limpar dados):
```bash
docker compose down -v
```

### Para limpar tudo (containers, volumes, imagens):
```bash
docker compose down -v --rmi all
```

## Testando a API

**Swagger:** http://localhost:3001/api

**Exemplos com curl:**
```bash
# Listar todas as marcas
curl http://localhost:3001/brands

# Buscar marca por ID
curl http://localhost:3001/brands/1

# Criar nova marca
curl -X POST http://localhost:3001/brands \
  -H "Content-Type: application/json" \
  -d '{"name":"Tesla","expertise":"Carros elétricos","year_founded":2003,"active":true}'

# Atualizar marca
curl -X PUT http://localhost:3001/brands/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Tesla Motors","active":false}'

# Deletar marca
curl -X DELETE http://localhost:3001/brands/1
```

## Variáveis de Ambiente

Configuradas no arquivo `.env`:

```bash
# Banco PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres123
POSTGRES_DB=brands_db
POSTGRES_PORT=5432

# API
API_PORT=3001
DB_HOST=postgres

# Frontend  
FRONTEND_PORT=3000
```

## Conexão com PostgreSQL

**Dados para conectar:**
- **Host**: localhost
- **Porta**: 5432
- **Usuário**: postgres
- **Senha**: postgres123
- **Banco**: brands_db

**Volume persistente:** `brands_postgres_data`