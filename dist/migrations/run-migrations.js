"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const database_1 = require("../config/database");
async function runMigrations() {
    const schemaPath = path_1.default.join(__dirname, "../../sql/schema.sql");
    const schema = fs_1.default.readFileSync(schemaPath, "utf-8");
    try {
        console.log("⚙️ Executando migrações...");
        await database_1.pool.query(schema);
        console.log("✅ Migrações concluídas com sucesso!");
    }
    catch (error) {
        console.error("❌ Falha na migração:", error);
        process.exit(1);
    }
    finally {
        await database_1.pool.end();
    }
}
runMigrations();
