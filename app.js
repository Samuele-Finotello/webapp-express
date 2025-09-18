const express = require('express');

const app = express();

const port = 3000;

//rotta base
app.get('/', (req, res) => {
  res.send('Rotta base')
})

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})