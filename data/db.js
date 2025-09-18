const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect((err) => {
  if (err) return console.log('Errore nella connessione al database: ' + err)
  console.log('Connessione al database effettuata')
})

module.exports = connection;