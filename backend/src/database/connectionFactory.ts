require("dotenv").config()
const connection = require('mysql2-promise')();

connection.configure({
  host: `${process.env.HOSTDB}`,
  user: `${process.env.USERDB}`,
  password: `${process.env.PASSWORDDB}`,
  database: `${process.env.DATABASEDB}`
})

// connection.end();

export { connection }