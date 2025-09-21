const express = require('express');

const cors = require('cors')

const app = express();

const port = process.env.PORT;

const movieRouter = require('./routers/movieRouter')

app.use(cors({ origin: process.env.FE_APP }))

//rotta base
app.get('/', (req, res) => {
  res.send('Rotta base')
})

app.use('/db/movies', movieRouter)

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})