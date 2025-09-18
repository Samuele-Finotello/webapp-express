const connection = require('../data/db')

const index = (req, res) => {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Errore nel caricamento dei film: ' + err });
    res.send(results)
  })
}

const show = (req, res) => {
  console.log('Film con id ?')
}

module.exports = {
  index,
  show
}