"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const hash_1 = require("../utils/hash");
async function seed() {
    try {
        console.log("🌱 Semeando o banco de dados...");
        const email = "admin@exemplo.com";
        const password = "admin_senha_123";
        const hashedPassword = await (0, hash_1.hashPassword)(password);
        await database_1.pool.query("INSERT INTO users (email, password) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING", [email, hashedPassword]);
        console.log("✨ Seeding concluído com sucesso!");
        console.log(`👤 Usuário de teste criado: ${email} / ${password}`);
    }
    catch (error) {
        console.error("❌ Falha no seeding:", error);
        process.exit(1);
    }
    finally {
        await database_1.pool.end();
    }
}
seed();
