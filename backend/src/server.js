import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRoute from "../src/routes/transactionsRoute.js";

dotenv.config();

const app = express();

app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        category VARCHAR(50) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
      );
    `;
    console.log("Database intilaized succssfully");
  } catch (erorr) {
    console.log("Erorr intilaizing Database", erorr);
    process.exit(1);
  }
}
app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
});
