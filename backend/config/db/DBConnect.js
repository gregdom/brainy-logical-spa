import mysql from "mysql2";
import util from "util";
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
      } else {
        resolve(connection);
      }
    });
  });
};

export const query = async (sql, values) => {
  const connection = await getConnection();
  try {
    const query = util.promisify(connection.query).bind(connection);
    const results = await query(sql, values);
    return results;
  } finally {
    connection.release();
  }
};


// import mysql from "mysql2"
// import dotenv from 'dotenv'

// dotenv.config()

// const CONNECTION = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// })

// CONNECTION.connect(error => {
//   if (error) throw error
// })

// export default CONNECTION