const connection = require('../data/db')

const index = (req, res) => {
  console.log('Lista film')
}

const show = (req, res) => {
  console.log('Film con id ?')
}

module.exports = {
  index,
  show
}