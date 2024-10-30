import 'dotenv/config'
import { drizzle } from "drizzle-orm/mysql2";

const db = drizzle({
    connection: {
        host: process.env.DATABASE_HOST!,
        port: parseInt(process.env.DATABASE_PORT!),
        user: process.env.DATABASE_USER!,
        password: process.env.DATABASE_PASSWORD!,
        database: process.env.DATABASE_DB_NAME!,
    }
});

export default db;