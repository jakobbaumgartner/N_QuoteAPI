const fs = require('fs')

module.exports.greatquotes = JSON.parse(fs.readFileSync('./Quotes/great.json'))
module.exports.tvquotes = JSON.parse(fs.readFileSync('./Quotes/tv.json'))
module.exports.rickandmortyquotes = JSON.parse(fs.readFileSync('./Quotes/rick-and-morty.json'))
