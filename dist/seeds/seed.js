"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const hash_1 = require("../utils/hash");
async function seed() {
    try {
        console.log("Seeding database...");
        const email = "admin@example.com";
        const password = "admin_password_123";
        const hashedPassword = await (0, hash_1.hashPassword)(password);
        await database_1.pool.query("INSERT INTO users (email, password) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING", [email, hashedPassword]);
        console.log("Seeding completed successfully.");
        console.log(`Test user created: ${email} / ${password}`);
    }
    catch (error) {
        console.error("Seeding failed:", error);
        process.exit(1);
    }
    finally {
        await database_1.pool.end();
    }
}
seed();
