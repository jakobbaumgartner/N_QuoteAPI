const express = require('express');


const {functiongreat, functionrickandmorty, functontv} = require('./controllers/servingfunctions')

const app = express()


app.get('/great', functiongreat);

app.get('/tv', functontv);

app.get('/rickandmorty',functionrickandmorty)

app.use('/help', (req, res) => {
	res.status(200).send("On this API you can get three different quotes in response. A random quote will  be returned based on request path variable. \n You can request: '/great', '/tv' or '/rickandmorty'.")
	console.log("help")
});

app.use('/', (req, res) => {
	res.status(400).send("This URL does not exist. Try '/help' ")
	console.log("not exist")
});




app.listen(3000, () => {
	console.log(`Server started on port 3000`);
});