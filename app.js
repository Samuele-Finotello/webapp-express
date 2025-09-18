const express = require('express');
const connection = require('./data/db')

const app = express();

const port = process.env.PORT;

//rotta base
app.get('/', (req, res) => {
  res.send('Rotta base')
})

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})