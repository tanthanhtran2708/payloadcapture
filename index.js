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

var port = server.listen(process.env.PORT || 3000);
app.listen(port, () =>{
	console.log(`App listening on ${port}`)
});