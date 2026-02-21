<div align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/master/icons/lock.svg" width="100" />
  <h1>🔥 AUTH-MASTER-SENIOR 🔥</h1>

  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  </p>

  <p><b>A API de Autenticação JWT Definitiva - Segurança Nível Sênior para Aplicações de Alto Calibre.</b></p>
</div>

---

## 💎 Sobre o Projeto

Este projeto é uma **Fortaleza Digital** construída para lidar com autenticação de forma profissional e escalável. Utilizando as melhores práticas do mercado, garantimos que cada byte de dado esteja protegido por criptografia de ponta e uma arquitetura impecável.

> "Segurança não é um produto, é um processo."

---

## ⚡ Funcionalidades de Elite

- 🔐 **JWT Avançado**: Controle total com *Access Tokens* e *Refresh Tokens*.
- 🔄 **Refresh Token Rotation**: Segurança máxima contra ataques de repetição.
- 🏢 **Multi-Session**: Gerencie sessões de forma centralizada e eficaz.
- 🛡️ **Defesas Ativas**:
  - `Bcrypt` com salts dinâmicos para senhas.
  - `Helmet` para cabeçalhos de segurança HTTP.
  - `CORS` configurado para produção.
  - Validação rigorosa com `Zod`.
- 🧩 **Arquitetura Sênior**: Camadas separadas (Controller, Service, Repository, DTO).
- 🚦 **Global Error Handling**: Respostas de erro elegantes e padronizadas.

---

## 🛠️ Arsenal Tecnológico

| Tecnologia | Função | Nível |
| :--- | :--- | :--- |
| **Zod** | Validação de Esquemas & Env | 🧙‍♂️ Sênior |
| **NeonDB** | PostgreSQL na Nuvem (Serverless) | 🚀 Performance |
| **Bcrypt** | Criptografia de Senhas | 🔒 Inquebrável |
| **TypeScript** | Tipagem Estrita & Manutenibilidade | ⚔️ Pro |

---

## 🚀 Como Iniciar a Operação

### 1. Preparação do Terreno
```bash
git clone https://github.com/joao-ryan/JWT-server-log.git
cd JWT-server-log
npm install
```

### 2. Configuração do Radar (.env)
Crie o arquivo `.env` com as coordenadas corretas:
```env
DATABASE_URL=seu_link_do_neondb_aqui
JWT_SECRET=super_segredo_mestre_123
JWT_REFRESH_SECRET=outro_segredo_ultra_secreto_456
PORT=3000
```

### 3. Ignição do Banco de Dados
```bash
# Executar migrações (Criação de tabelas)
npm run migration:run

# Popular com dados iniciais (Opcional)
npm run seed:run
```

---

## 🛰️ Pontos de Acesso (API)

| Método | Rota | Descrição | Protegido |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Recruta um novo usuário | ❌ |
| `POST` | `/auth/login` | Acesso ao centro de comando | ❌ |
| `POST` | `/auth/refresh` | Renovação de credenciais | ❌ |
| `POST` | `/auth/logout-all` | Abortar todas as sessões | ❌ |

---

## ☁️ Deploy no Render (Pronto para Combate)

Para implantar esta API no **Render**, siga estas diretrizes:

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `npm start`
3. **Variáveis de Ambiente**: Configure todas as chaves do `.env` no painel do Render.

---

<div align="center">
  <p>Desenvolvido com maestria por <b>Joao Ryan</b> 🚀</p>
  <img src="https://img.shields.io/badge/Made%20with-Passion-ff69b4?style=flat-square" />
</div>
