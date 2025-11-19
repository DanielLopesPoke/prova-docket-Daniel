# Criar Novo Repositório: prova-docket-daniel

## Passo 1: Remover Git atual
```bash
rmdir /s .git
```

## Passo 2: Criar repositório no GitHub
- Acesse https://github.com
- Clique em "New repository" 
- **Nome**: `prova-docket-daniel`
- Deixe público
- NÃO adicione README, .gitignore ou license
- Clique em "Create repository"

## Passo 3: Inicializar Git limpo
```bash
git init
git add .
git commit -m "Projeto fullstack - estrutura inicial completa"
```

## Passo 4: Conectar ao repositório novo
```bash
git remote add origin https://github.com/DanielLopesPoke/prova-docket-daniel.git
git branch -M main
git push -u origin main
```

## ✅ Resultado
- Histórico limpo
- Repositório novo com nome correto
- Todas as questões 1 e 2 já prontas