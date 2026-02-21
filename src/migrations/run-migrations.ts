import fs from "fs";
import path from "path";
import { pool } from "../config/database";

async function runMigrations() {
  const schemaPath = path.join(__dirname, "../../sql/schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf-8");

  try {
    console.log("⚙️ Executando migrações...");
    await pool.query(schema);
    console.log("✅ Migrações concluídas com sucesso!");
  } catch (error) {
    console.error("❌ Falha na migração:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();
