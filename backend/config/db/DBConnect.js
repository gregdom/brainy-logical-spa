import mysql from "mysql2"
import dotenv from 'dotenv'

dotenv.config()

const CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

CONNECTION.connect(error => {
  if (error) throw error
})

export default CONNECTION