# Como testar o PostgreSQL

## 1. Subir só o banco
```bash
docker compose up postgres -d
```

## 2. Testar conexão
```bash
# Conectar no banco
docker exec -it brands_postgres psql -U postgres -d brands_db

# Comandos no PostgreSQL
\l          # Listar bancos
\c brands_db # Conectar no banco
\dt         # Listar tabelas
\q          # Sair
```

## 3. Ou usar cliente externo
- **Host**: localhost
- **Porta**: 5432
- **Usuário**: postgres
- **Senha**: postgres123
- **Banco**: brands_db

## 4. Parar o banco
```bash
docker compose down
```