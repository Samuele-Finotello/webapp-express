const connection = require('../data/db')

const index = (req, res) => {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Errore nel caricamento dei film: ' + err });
    res.send(results)
  })
}

const show = (req, res) => {
  const id = req.params.id;
  const nameSql = 'SELECT * FROM movies WHERE id = ?'

  const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?'

  connection.query(nameSql, [id], (err, resultsName) => {
    if (err) return res.status(500).json({ error: 'Errore nel caricamento del film: ' + err });
    if (resultsName.length === 0) return res.status(404).json({ error: 'Film non trovato' })

    connection.query(reviewsSql, [id], (err, resultsReviews) => {
      if (err) return res.status(500).json({ error: 'Errore nel caricamento del film: ' + err });

      const resultsNameReviews = {
        ...resultsName[0],
        reviews: resultsReviews
      }

      res.send(resultsNameReviews)
    })
  })
}

module.exports = {
  index,
  show
}