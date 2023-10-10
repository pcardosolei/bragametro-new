import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

if (
  !process.env.DATABASE_URL ||
  !process.env.DATABASE_USER ||
  !process.env.DATABASE_PW
) {
  throw new Error("Missing database credentials for the connection");
}

const db = new Sequelize(
  process.env.DATABASE_URL,
  process.env.DATABASE_USER,
  process.env.DATABASE_PW,
  {
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: mysql2,
  }
);

export default db;
