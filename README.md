# Professional JWT Authentication API (Senior Level)

A robust, production-ready JWT authentication API built with Node.js, Express, TypeScript, and PostgreSQL (NeonDB). This project follows clean architecture principles and senior-level security best practices.

## 🚀 Features

- **JWT Authentication**: Secure access and refresh token implementation.
- **Session Management**: Server-side session tracking with refresh token rotation.
- **Robust Security**:
  - Password hashing with `bcrypt`.
  - Security headers with `helmet`.
  - CORS configuration.
  - Environment variable validation with `zod`.
- **Global Error Handling**: Centralized middleware for consistent error responses.
- **Data Validation**: Request body validation using `zod` schemas.
- **Typescript**: Fully typed codebase for maximum maintainability.
- **Database**: PostgreSQL integration with `pg` pooler, optimized for NeonDB.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (NeonDB)
- **Validation**: Zod
- **Security**: JWT, Bcrypt, Helmet, CORS

## 📋 Prerequisites

- Node.js (v18+)
- PostgreSQL Database (NeonDB recommended)

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/joao-ryan/JWT-server-log.git
   cd JWT-server-log
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_access_token_secret
   JWT_REFRESH_SECRET=your_refresh_token_secret
   PORT=3000
   ```

4. **Run Database Migrations**:
   Execute the SQL script found in `sql/schema.sql` on your PostgreSQL instance.

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 🔌 API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate and receive tokens.
- `POST /auth/refresh`: Get a new access token using a refresh token.
- `POST /auth/logout-all`: Invalidate all sessions for a user.

## ☁️ Deployment on Render

1. Create a new **Web Service** on Render.
2. Connect your GitHub repository.
3. Configure the following:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Add your `.env` variables in the **Environment** tab.

---
Developed with ❤️ by Joao Ryan.
