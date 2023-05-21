import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

CONNECTION.connect();

CONNECTION.query("SELECT 1 + 1 AS solution", function (error, results) {
  if (error) throw error;
  console.log("O resultado é: ", results[0].solution, "arquivo database");
});

export default CONNECTION;