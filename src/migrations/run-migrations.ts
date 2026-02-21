import fs from "fs";
import path from "path";
import { pool } from "../config/database";

async function runMigrations() {
  const schemaPath = path.join(__dirname, "../../sql/schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf-8");

  try {
    console.log("Running migrations...");
    await pool.query(schema);
    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();
