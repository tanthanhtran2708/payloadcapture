const { response, request } = require('express')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
	response.status(200)
	response.send({ message: "Hello"})
})


app.post('/', (request, response) => {
	const jsonBody = request.body
	response.status(200)
	response.send({message: `Your JSON = ${JSON.stringify(jsonBody)}`})
})

app.listen(1234, () => {
	console.log('Listen to port 1234')
})