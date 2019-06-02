const {greatquotes, tvquotes, rickandmortyquotes} = require('../Quotes/quotes')

module.exports.functiongreat = (req, res) => {


	var quote = greatquotes[Math.floor(Math.random()*80)]
	console.log(quote)
	res.status(200).send(JSON.stringify(quote))

}

module.exports.functontv = (req, res) => {

	var quote = tvquotes[Math.floor(Math.random()*137)]
	console.log(quote)
	res.status(200).send(JSON.stringify(quote))
	
}

module.exports.functionrickandmorty = (req, res) => {

	var quote = rickandmortyquotes[Math.floor(Math.random()*126)]
	console.log(quote)
	res.status(200).send(JSON.stringify(quote))

	
}