import { pool } from "../config/database";
import { hashPassword } from "../utils/hash";

async function seed() {
  try {
    console.log("Seeding database...");

    const email = "admin@example.com";
    const password = "admin_password_123";
    const hashedPassword = await hashPassword(password);

    await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING",
      [email, hashedPassword]
    );

    console.log("Seeding completed successfully.");
    console.log(`Test user created: ${email} / ${password}`);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seed();
