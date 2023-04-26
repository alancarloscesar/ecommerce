require("dotenv").config()
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: `${process.env.HOSTDB}`,
  user: `${process.env.USERDB}`,
  password: `${process.env.PASSWORDDB}`,
  database: `${process.env.DATABASEDB}`
});

// connection.end();

export { connection }